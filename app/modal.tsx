import { StyleSheet, TouchableOpacity, Text, FlatList, ScrollView } from 'react-native';
import { View } from '@/components/Themed';
import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { hiraganaBeginner } from '@/constants/Kana';
import Colors from '@/constants/Colors';

const hiraganaGroups = [
  { title: 'Hiragana Beginner', data: hiraganaBeginner },
  // Additional groups can be added here...
];

export default function ModalScreen() {
  const { colors } = useTheme();
  const [selectedKana, setSelectedKana] = useState<string[]>([]);

  const toggleKanaSelection = (kana: string) => {
    setSelectedKana(prevSelected =>
      prevSelected.includes(kana)
        ? prevSelected.filter(k => k !== kana)
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
              <Text style={{ color: '#FFFFFF', fontFamily: 'Orbitron', fontSize: 15 }}>Level {subIndex + 1}</Text>
              <FlatList
                data={subArray}
                keyExtractor={(item, index) => `${item.japanese}-${index}`}
                numColumns={6}
                scrollEnabled={false} // Outer ScrollView handles scrolling
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.kanaItem,
                      selectedKana.includes(item.japanese) && styles.selectedKana,
                    ]}
                    onPress={() => toggleKanaSelection(item.japanese)}
                  >
                    <Text style={[
                      styles.kanaText,
                      selectedKana.includes(item.japanese) && styles.selectedKanaText,
                    ]}>{item.japanese}</Text>
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
    color: '#FFFFFF'
  },
  selectedKana: {
    backgroundColor: Colors.green,
  },
  selectedKanaText: {
    color: '#000000',
  },
});
