import React, { useState, useEffect, useRef } from 'react';
import { 
  StyleSheet, 
  TouchableOpacity, 
  Vibration, 
  Pressable, 
  Animated 
} from 'react-native';
import { Audio } from 'expo-av';
import { RFValue } from 'react-native-responsive-fontsize';
import { Text, View } from '@/components/Themed';
import { useTheme } from '@react-navigation/native';
import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

interface IKanaPair {
  japanese: string;
  english: string;
  audio: any;
}

const kanaList: IKanaPair[] = [
  { japanese: 'あ', english: 'a', audio: require('../../assets/sounds/hiragana_basic/あ.wav') },
  { japanese: 'い', english: 'i', audio: require('../../assets/sounds/hiragana_basic/い.wav') },
  { japanese: 'う', english: 'u', audio: require('../../assets/sounds/hiragana_basic/う.wav') },
  { japanese: 'え', english: 'e', audio: require('../../assets/sounds/hiragana_basic/え.wav') },
  { japanese: 'お', english: 'o', audio: require('../../assets/sounds/hiragana_basic/お.wav') },
];

const shuffleChoices = (choices: IKanaPair[]) => {
  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }
  return [...choices]; // Return a new array to trigger re-render
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

export default function TabOneScreen() {
  const [currentKanaIndex, setCurrentKanaIndex] = useState(0);
  const [answers, setAnswers] = useState<IKanaPair[]>([]);
  const [disableChoices, setDisableChoices] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [choiceItems, setChoiceItems] = useState<IKanaPair[]>(() => shuffleChoices([...kanaList]));
  const [incorrect, setIncorrect] = useState<IKanaPair[]>([]);
  const { playSound } = AudioPlayer();
  const { colors } = useTheme();

  // Animated value to drive the text color (white -> red -> white)
  const colorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setChoiceItems(shuffleChoices([...kanaList]));
  }, [currentKanaIndex]);

  const handleChoicePress = (choice: IKanaPair) => {
    setDisableChoices(true);

    const isCorrect = choice.english === kanaList[currentKanaIndex].english;
    
    setAnswers(prev => [...prev, { ...choice, isCorrect }]);

    if (isCorrect) {
      playSound(choice.audio);
      setTimeout(() => {
        if (currentKanaIndex === kanaList.length - 1) {
          setGameComplete(true);
        } else {
          setCurrentKanaIndex(prev => prev + 1);
        }
      }, 500);
    } else {
      Vibration.vibrate();

      // Push current kana to incorrect list
      setIncorrect(prev => [...prev, kanaList[currentKanaIndex]]);

      // Animate the text color: white -> red -> white
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
        if (currentKanaIndex === kanaList.length - 1) {
          setGameComplete(true);
        } else {
          setCurrentKanaIndex(prev => prev + 1);
        }
      });
    }
    setDisableChoices(false);
  };

  const playAgain = () => {
    setGameComplete(false);
    setCurrentKanaIndex(0);
    setAnswers([]);
    setIncorrect([]);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {!gameComplete && currentKanaIndex !== kanaList.length ? (
        <>
          <Animated.Text 
            style={[
              styles.currentKana, 
              { color: colorAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['#ffffff', '#f23545']
                })
              }
            ]}
          >
            {kanaList[currentKanaIndex].japanese}
          </Animated.Text>
          <View style={[styles.choices, { backgroundColor: colors.card }]}>
            {choiceItems.map((choice, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleChoicePress(choice)}
                style={styles.choiceItem}
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
              incorrect.map((item, index) => (
                <View style={[styles.incorrectItem, { backgroundColor: colors.card }]} key={index}>
                  <Text style={styles.incorrectText}>
                    {item.japanese} = {item.english}
                  </Text>
                  <Pressable onPress={() => playSound(item.audio)}>
                    <FontAwesome name="volume-up" size={32} color="#fff" />
                  </Pressable>
                </View>
              ))
            ) : (
              <Text style={styles.noIncorrectText}>No incorrect answers</Text>
            )}
          </View>
          <Pressable 
            onPress={playAgain}
            disabled={disableChoices}
            style={{ backgroundColor: Colors.green, padding: 4, borderRadius: 2, alignItems: 'center' }}
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
    fontFamily: 'NotoSansJP',
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
