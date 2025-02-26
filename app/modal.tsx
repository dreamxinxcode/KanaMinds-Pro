import { StyleSheet, TouchableOpacity, Text, FlatList, ScrollView } from 'react-native';
import { View } from '@/components/Themed';
import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { 
  hiraganaBasic, hiraganaDakuten, 
  hiraganaHandakuten, hiraganaYoon, 
  katakanaBasic, katakanaDakuten, 
  katakanaHandakuten, katakanaYoon 
} from '@/constants/Kana';
import Colors from '@/constants/Colors';


const hiraganaGroups = [
  { title: 'Hiragana Basic', data: hiraganaBasic },
  { title: 'Hiragana Dakuten', data: hiraganaDakuten }, 
  { title: 'Hiragana Handakuten', data: hiraganaHandakuten },  
  { title: 'Hiragana Yoon', data: hiraganaYoon },
];

const katakanaGroups = [
  { title: 'Katakana Basic', data: katakanaBasic },
  { title: 'Katakana Dakuten', data: katakanaDakuten }, 
  { title: 'Katakana Handakuten', data: katakanaHandakuten },  
  { title: 'Katakana Yoon', data: katakanaYoon },
];

export default function ModalScreen() {
  const { colors } = useTheme();
  const [selectedKana, setSelectedKana] = useState<string[]>([]);

  const toggleKanaSelection = (kana: string) => {
    setSelectedKana((prevSelected) =>
      prevSelected.includes(kana)
        ? prevSelected.filter((k) => k !== kana)
        : [...prevSelected, kana]
    );
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.card }]}> 
      {hiraganaGroups.map((group, index) => (
        <View key={index} style={[styles.groupContainer, { backgroundColor: colors.card }]}> 
          <Text style={styles.groupTitle}>{group.title}</Text>
          <FlatList
            data={group.data}
            keyExtractor={(item) => item.japanese}
            numColumns={6} // Adjust for better wrapping
            scrollEnabled={false} // Disable scrolling on the inner FlatList
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.kanaItem,
                  selectedKana.includes(item.japanese) && styles.selectedKana,
                ]}
                onPress={() => toggleKanaSelection(item.japanese)}
              >
                <Text style={styles.kanaText}>{item.japanese}</Text>
              </TouchableOpacity>
            )}
          />
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
    alignItems: 'center',
  },
  groupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  kanaItem: {
    padding: 10,
    margin: 5,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedKana: {
    borderColor: Colors.green,
  },
  kanaText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'NotoSansJP',
    color: '#FFFFFF'
  },
});
