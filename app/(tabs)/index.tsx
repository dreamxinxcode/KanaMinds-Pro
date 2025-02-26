import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
  Vibration,
  Pressable,
  Animated
} from 'react-native';
import { Audio } from 'expo-av';
import { RFValue } from 'react-native-responsive-fontsize';
import { Text as ThemedText, View } from '@/components/Themed';
import { useTheme } from '@react-navigation/native';
import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IKanaPair } from '@/types/IKanaPair';

// Default master list (fallback)
const defaultKanaList: IKanaPair[] = [
  { japanese: 'あ', english: 'a', audio: require('../../assets/sounds/hiragana_basic/あ.wav') },
  { japanese: 'い', english: 'i', audio: require('../../assets/sounds/hiragana_basic/い.wav') },
  { japanese: 'う', english: 'u', audio: require('../../assets/sounds/hiragana_basic/う.wav') },
  { japanese: 'え', english: 'e', audio: require('../../assets/sounds/hiragana_basic/え.wav') },
  { japanese: 'お', english: 'o', audio: require('../../assets/sounds/hiragana_basic/お.wav') },
];

const shuffleArray = <T,>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return [...array];
};

const AudioPlayer = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const playSound = async (audioSource: any) => {
    try {
      const { sound: newSound } = await Audio.Sound.createAsync(audioSource);
      setSound(newSound);
      await newSound.playAsync();
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  return { playSound };
};

/**
 * Generates an array of 5 answer choices.
 * It picks 4 random choices (excluding the correct answer) from the source list,
 * adds the correct answer, and then shuffles the result.
 */
const generateChoiceItems = (correct: IKanaPair, source: IKanaPair[]): IKanaPair[] => {
  // Filter out the correct answer
  const filtered = source.filter(item => item.japanese !== correct.japanese);
  const choices: IKanaPair[] = [];
  const copy = [...filtered];

  // Get 4 random items from the filtered array
  for (let i = 0; i < 4; i++) {
    if (copy.length === 0) break;
    const randomIndex = Math.floor(Math.random() * copy.length);
    choices.push(copy[randomIndex]);
    copy.splice(randomIndex, 1); // remove to avoid duplicates
  }
  // Add the correct answer
  choices.push(correct);
  return shuffleArray(choices);
};

export default function TabOneScreen() {
  const { colors } = useTheme();
  const [currentKanaIndex, setCurrentKanaIndex] = useState(0);
  const [answers, setAnswers] = useState<IKanaPair[]>([]);
  const [disableChoices, setDisableChoices] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  // The game list of 20 items (populated from stored kana)
  const [gameKanaList, setGameKanaList] = useState<IKanaPair[]>([]);
  // The choices for the current question (5 items)
  const [choiceItems, setChoiceItems] = useState<IKanaPair[]>([]);
  const [incorrect, setIncorrect] = useState<IKanaPair[]>([]);
  const { playSound } = AudioPlayer();
  const colorAnim = useRef(new Animated.Value(0)).current;

  // Load stored kana from AsyncStorage and generate a 20-item game list.
  useEffect(() => {
    const loadAndGenerateGameList = async () => {
      try {
        const storedKanaString = await AsyncStorage.getItem('selectedKana');
        let storedKana: IKanaPair[] = [];
        if (storedKanaString !== null) {
          storedKana = JSON.parse(storedKanaString);
        }
        // Use stored kana if available, otherwise fall back to defaultKanaList.
        const sourceList = storedKana.length > 0 ? storedKana : defaultKanaList;
        const newGameList: IKanaPair[] = [];
        for (let i = 0; i < 20; i++) {
          const randomIndex = Math.floor(Math.random() * sourceList.length);
          newGameList.push(sourceList[randomIndex]);
        }
        setGameKanaList(newGameList);
        setCurrentKanaIndex(0);
        setGameComplete(false);
        setAnswers([]);
        setIncorrect([]);
      } catch (error) {
        console.error('Error loading stored kana and generating game list:', error);
      }
    };
    loadAndGenerateGameList();
  }, []);

  // Whenever the current question or game list changes, generate a new set of 5 choices.
  useEffect(() => {
    if (gameKanaList.length > 0 && currentKanaIndex < gameKanaList.length) {
      const correct = gameKanaList[currentKanaIndex];
      const newChoices = generateChoiceItems(correct, gameKanaList);
      setChoiceItems(newChoices);
    }
  }, [currentKanaIndex, gameKanaList]);

  const handleChoicePress = (choice: IKanaPair) => {
    setDisableChoices(true);

    const isCorrect = choice.english === gameKanaList[currentKanaIndex].english;
    setAnswers(prev => [...prev, { ...choice, isCorrect }]);

    if (isCorrect) {
      playSound(choice.audio);
      setTimeout(() => {
        if (currentKanaIndex === gameKanaList.length - 1) {
          setGameComplete(true);
        } else {
          setCurrentKanaIndex(prev => prev + 1);
        }
      }, 500);
    } else {
      Vibration.vibrate();
      setIncorrect(prev => [...prev, gameKanaList[currentKanaIndex]]);
      Animated.sequence([
        Animated.timing(colorAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: false,
        }),
      ]).start(() => {
        if (currentKanaIndex === gameKanaList.length - 1) {
          setGameComplete(true);
        } else {
          setCurrentKanaIndex(prev => prev + 1);
        }
      });
    }
    setDisableChoices(false);
  };

  const playAgain = () => {
    // Regenerate game list from stored kana when playing again.
    const regenerateGameList = async () => {
      try {
        const storedKanaString = await AsyncStorage.getItem('selectedKana');
        let storedKana: IKanaPair[] = [];
        if (storedKanaString !== null) {
          storedKana = JSON.parse(storedKanaString);
        }
        const sourceList = storedKana.length > 0 ? storedKana : defaultKanaList;
        const newGameList: IKanaPair[] = [];
        for (let i = 0; i < 20; i++) {
          const randomIndex = Math.floor(Math.random() * sourceList.length);
          newGameList.push(sourceList[randomIndex]);
        }
        setGameKanaList(newGameList);
        setCurrentKanaIndex(0);
        setGameComplete(false);
        setAnswers([]);
        setIncorrect([]);
      } catch (error) {
        console.error('Error regenerating game list:', error);
      }
    };
    regenerateGameList();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {!gameComplete && currentKanaIndex < gameKanaList.length ? (
        <>
          <Animated.Text
            style={[
              styles.currentKana,
              {
                color: colorAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['#ffffff', '#f23545']
                })
              }
            ]}
          >
            {gameKanaList[currentKanaIndex]?.japanese}
          </Animated.Text>
          <View style={[styles.choices, { backgroundColor: colors.card }]}>
            {choiceItems.map((choice, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleChoicePress(choice)}
                style={styles.choiceItem}
                disabled={disableChoices}
              >
                <Text style={styles.choiceText}>
                  {choice.english.toUpperCase()}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      ) : (
        <View style={{ backgroundColor: colors.card }}>
          {/* Overview Section */}
          <View style={[styles.incorrectContainer, { backgroundColor: colors.card }]}>
            <Text style={styles.overviewTitle}>Overview</Text>
            {incorrect.length ? (
              <ScrollView>
                {incorrect.map((item, index) => (
                  <View
                    style={[styles.incorrectItem, { backgroundColor: colors.card }]}
                    key={index}
                  >
                    <Text style={styles.incorrectText}>
                      {item.japanese} = {item.english}
                    </Text>
                    <Pressable onPress={() => playSound(item.audio)}>
                      <FontAwesome name="volume-up" size={32} color="#fff" />
                    </Pressable>
                  </View>
                ))}
              </ScrollView>
            ) : (
              <Text style={styles.noIncorrectText}>No incorrect answers</Text>
            )}
          </View>
          <Pressable
            onPress={playAgain}
            disabled={disableChoices}
            style={{
              backgroundColor: Colors.green,
              padding: 4,
              borderRadius: 2,
              alignItems: 'center',
            }}
          >
            <Text style={{ fontFamily: 'Orbitron', color: '#FFFFFF' }}>Play Again</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentKana: {
    fontFamily: 'NotoSansJP',
    fontSize: RFValue(200),
    fontWeight: 'bold',
    marginBottom: 20,
  },
  choices: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 10,
  },
  choiceItem: {
    padding: 10,
    flex: 1,
  },
  choiceText: {
    fontFamily: 'Orbitron',
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  incorrectContainer: {
    padding: 20,
    borderRadius: 8,
    marginVertical: 20,
    width: '90%',
    alignSelf: 'center',
  },
  overviewTitle: {
    fontFamily: 'PressStart2P',
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  incorrectItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingVertical: 5,
  },
  incorrectText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'PressStart2P',
  },
  noIncorrectText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});
