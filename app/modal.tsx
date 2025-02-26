import { StyleSheet, TouchableOpacity, Text, FlatList, ScrollView } from 'react-native';
import { View } from '@/components/Themed';
import { useTheme } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { hiraganaBeginner } from '@/constants/Kana';
import Colors from '@/constants/Colors';
import { IKanaPair } from '@/types/IKanaPair';

const hiraganaGroups = [
  { title: 'Hiragana Beginner', data: hiraganaBeginner },
];

export default function ModalScreen() {
  const { colors } = useTheme();
  // Change state type to IKanaPair[]
  const [selectedKana, setSelectedKana] = useState<IKanaPair[]>([]);

  // Load persisted selected kana on mount
  useEffect(() => {
    const loadSelectedKana = async () => {
      try {
        const storedKana = await AsyncStorage.getItem('selectedKana');
        if (storedKana !== null) {
          setSelectedKana(JSON.parse(storedKana));
        }
      } catch (error) {
        console.error('Error loading selected kana:', error);
      }
    };
    loadSelectedKana();
  }, []);

  // Save selected kana whenever it changes
  useEffect(() => {
    const saveSelectedKana = async () => {
      try {
        await AsyncStorage.setItem('selectedKana', JSON.stringify(selectedKana));
      } catch (error) {
        console.error('Error saving selected kana:', error);
      }
    };
    saveSelectedKana();
  }, [selectedKana]);

  // Toggle selection based on unique property, e.g., the 'japanese' character.
  const toggleKanaSelection = (kana: IKanaPair) => {
    setSelectedKana(prevSelected =>
      prevSelected.some(k => k.japanese === kana.japanese)
        ? prevSelected.filter(k => k.japanese !== kana.japanese)
        : [...prevSelected, kana]
    );
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.card }]}>
      {hiraganaGroups.map((group, groupIndex) => (
        <View key={groupIndex} style={[styles.groupContainer, { backgroundColor: colors.card }]}>
          <Text style={styles.groupTitle}>{group.title}</Text>
          {group.data.map((subArray, subIndex) => (
            <View key={subIndex} style={[styles.subArrayContainer, { backgroundColor: colors.card }]}>
              <Text style={{ color: '#FFFFFF', fontFamily: 'Orbitron', fontSize: 15 }}>
                Level {subIndex + 1}
              </Text>
              <FlatList
                data={subArray}
                keyExtractor={(item, index) => `${item.japanese}-${index}`}
                numColumns={6}
                scrollEnabled={false} // Outer ScrollView handles scrolling
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.kanaItem,
                      selectedKana.some(k => k.japanese === item.japanese) && styles.selectedKana,
                    ]}
                    onPress={() => toggleKanaSelection(item)}
                  >
                    <Text
                      style={[
                        styles.kanaText,
                        selectedKana.some(k => k.japanese === item.japanese) && styles.selectedKanaText,
                      ]}
                    >
                      {item.japanese}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  groupContainer: {
    marginBottom: 20,
  },
  groupTitle: {
    fontFamily: 'Orbitron',
    fontSize: 20,
    marginBottom: 10,
    color: '#FFFFFF',
  },
  subArrayContainer: {
    marginBottom: 10,
  },
  kanaItem: {
    padding: 10,
    margin: 5,
    borderColor: Colors.green,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kanaText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'NotoSansJP',
    color: '#FFFFFF',
  },
  selectedKana: {
    backgroundColor: Colors.green,
  },
  selectedKanaText: {
    color: '#000000',
  },
});
