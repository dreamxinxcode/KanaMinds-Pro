import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Alert, Vibration } from 'react-native';
import { Audio } from 'expo-av';
import { RFValue } from 'react-native-responsive-fontsize';
import { Text, View } from '@/components/Themed';

interface IKanaPair {
  japanese: string;
  english: string;
}

const kanaList: IKanaPair[] = [
  { japanese: 'あ', english: 'a' },
  { japanese: 'い', english: 'i' },
  { japanese: 'う', english: 'u' },
  { japanese: 'え', english: 'e' },
  { japanese: 'お', english: 'o' },
];

const shuffleChoices = (choices: IKanaPair[]) => {
  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }
  return [...choices]; // Ensure a new array is returned to trigger re-render
};

const AudioPlayer = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  useEffect(() => {
    return () => {
      // Clean up the sound object
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const playSound = async (soundFileName: string) => {
    const path = `../../assets/sounds/a.wav`;
    const { sound: newSound } = await Audio.Sound.createAsync(require(path));
    setSound(newSound);
    await newSound.playAsync();
  };

  return { playSound };
};

export default function TabOneScreen() {
  const [currentKanaIndex, setCurrentKanaIndex] = useState(0);
  const [_, setAnswers] = useState<IKanaPair[]>([]);
  const [gameComplete, setGameComplete] = useState(false);
  const [choiceItems, setChoiceItems] = useState<IKanaPair[]>(() => shuffleChoices([...kanaList]));
  const { playSound } = AudioPlayer();

  useEffect(() => {
    setChoiceItems(shuffleChoices([...kanaList]));
  }, [currentKanaIndex]);

  const handleChoicePress = (choice: IKanaPair) => {
    const isCorrect = choice.english === kanaList[currentKanaIndex].english;
    setAnswers(prevAnswers => [...prevAnswers, { ...choice, isCorrect }]);

    if (isCorrect) {
      playSound(choice.english);
    } else {
      Vibration.vibrate();
    }

    setTimeout(() => {
      if (currentKanaIndex === kanaList.length - 1) {
        setGameComplete(true);
        Alert.alert('Game Complete', 'You have finished the game!', [{ text: 'OK' }]);
      } else {
        setCurrentKanaIndex(prevIndex => prevIndex + 1);
      }
    }, 500);
  };

  return (
    <View style={styles.container}>
      {!gameComplete ? (
        <>
          <Text style={styles.currentKana}>{kanaList[currentKanaIndex].japanese}</Text>
          <View style={styles.choices}>
            {choiceItems.map((choice, index) => (
              <TouchableOpacity key={index} onPress={() => handleChoicePress(choice)} style={styles.choiceItem}>
                <Text style={styles.choiceText}>{choice.japanese}</Text>
              </TouchableOpacity>
            ))}
          </View>  
        </>
      ): (
        <Text>Game Complete!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  currentKana: {
    fontFamily: 'NotoSansJP',
    fontSize: RFValue(200),
    fontWeight: 'bold',
    marginBottom: 20
  },
  choices: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 10
  },
  choiceItem: {
    padding: 10,
    flex: 1,
  },
  choiceText: {
    fontFamily: 'NotoSansJP',
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center'
  }
});
