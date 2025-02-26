import { IKanaPair } from "@/types/IKanaPair";

const hiraganaBeginner1: IKanaPair[] = [
  { japanese: 'あ', english: 'a', audio: require('../assets/sounds/hiragana_basic/あ.wav') },
  { japanese: 'い', english: 'i', audio: require('../assets/sounds/hiragana_basic/い.wav') },
  { japanese: 'う', english: 'u', audio: require('../assets/sounds/hiragana_basic/う.wav') },
  { japanese: 'え', english: 'e', audio: require('../assets/sounds/hiragana_basic/え.wav') },
  { japanese: 'お', english: 'o', audio: require('../assets/sounds/hiragana_basic/お.wav') },
];

const hiraganaBeginner2: IKanaPair[] = [
  { japanese: 'か', english: 'ka', audio: require('../assets/sounds/hiragana_basic/か.wav') },
  { japanese: 'き', english: 'ki', audio: require('../assets/sounds/hiragana_basic/き.wav') },
  { japanese: 'く', english: 'ku', audio: require('../assets/sounds/hiragana_basic/く.wav') },
  { japanese: 'け', english: 'ke', audio: require('../assets/sounds/hiragana_basic/け.wav') },
  { japanese: 'こ', english: 'ko', audio: require('../assets/sounds/hiragana_basic/こ.wav') },
];

const hiraganaBeginner3: IKanaPair[] = [
  { japanese: 'さ', english: 'sa', audio: require('../assets/sounds/hiragana_basic/さ.wav') },
  { japanese: 'し', english: 'shi', audio: require('../assets/sounds/hiragana_basic/し.wav') },
  { japanese: 'す', english: 'su', audio: require('../assets/sounds/hiragana_basic/す.wav') },
  { japanese: 'せ', english: 'se', audio: require('../assets/sounds/hiragana_basic/せ.wav') },
  { japanese: 'そ', english: 'so', audio: require('../assets/sounds/hiragana_basic/そ.wav') },
];

const hiraganaBeginner4: IKanaPair[] = [
  { japanese: 'た', english: 'ta', audio: require('../assets/sounds/hiragana_basic/た.wav') },
  { japanese: 'ち', english: 'chi', audio: require('../assets/sounds/hiragana_basic/ち.wav') },
  { japanese: 'つ', english: 'tsu', audio: require('../assets/sounds/hiragana_basic/つ.wav') },
  { japanese: 'て', english: 'te', audio: require('../assets/sounds/hiragana_basic/て.wav') },
  { japanese: 'と', english: 'to', audio: require('../assets/sounds/hiragana_basic/と.wav') },
];

const hiraganaBeginner5: IKanaPair[] = [
  { japanese: 'な', english: 'na', audio: require('../assets/sounds/hiragana_basic/な.wav') },
  { japanese: 'に', english: 'ni', audio: require('../assets/sounds/hiragana_basic/に.wav') },
  { japanese: 'ぬ', english: 'nu', audio: require('../assets/sounds/hiragana_basic/ぬ.wav') },
  { japanese: 'ね', english: 'ne', audio: require('../assets/sounds/hiragana_basic/ね.wav') },
  { japanese: 'の', english: 'no', audio: require('../assets/sounds/hiragana_basic/の.wav') },
];

const hiraganaBeginner6: IKanaPair[] = [
  { japanese: 'は', english: 'ha', audio: require('../assets/sounds/hiragana_basic/は.wav') },
  { japanese: 'ひ', english: 'hi', audio: require('../assets/sounds/hiragana_basic/ひ.wav') },
  { japanese: 'ふ', english: 'fu', audio: require('../assets/sounds/hiragana_basic/ふ.wav') },
  { japanese: 'へ', english: 'he', audio: require('../assets/sounds/hiragana_basic/へ.wav') },
  { japanese: 'ほ', english: 'ho', audio: require('../assets/sounds/hiragana_basic/ほ.wav') },
];

const hiraganaBeginner7: IKanaPair[] = [
  { japanese: 'ま', english: 'ma', audio: require('../assets/sounds/hiragana_basic/ま.wav') },
  { japanese: 'み', english: 'mi', audio: require('../assets/sounds/hiragana_basic/み.wav') },
  { japanese: 'む', english: 'mu', audio: require('../assets/sounds/hiragana_basic/む.wav') },
  { japanese: 'め', english: 'me', audio: require('../assets/sounds/hiragana_basic/め.wav') },
  { japanese: 'も', english: 'mo', audio: require('../assets/sounds/hiragana_basic/も.wav') },
];

const hiraganaBeginner8: IKanaPair[] = [
  { japanese: 'や', english: 'ya', audio: require('../assets/sounds/hiragana_basic/や.wav') },
  { japanese: 'ゆ', english: 'yu', audio: require('../assets/sounds/hiragana_basic/ゆ.wav') },
  { japanese: 'よ', english: 'yo', audio: require('../assets/sounds/hiragana_basic/よ.wav') },
];

const hiraganaBeginner9: IKanaPair[] = [
  { japanese: 'ら', english: 'ra', audio: require('../assets/sounds/hiragana_basic/ら.wav') },
  { japanese: 'り', english: 'ri', audio: require('../assets/sounds/hiragana_basic/り.wav') },
  { japanese: 'る', english: 'ru', audio: require('../assets/sounds/hiragana_basic/る.wav') },
  { japanese: 'れ', english: 're', audio: require('../assets/sounds/hiragana_basic/れ.wav') },
  { japanese: 'ろ', english: 'ro', audio: require('../assets/sounds/hiragana_basic/ろ.wav') },
];

const hiraganaBeginner10: IKanaPair[] = [
  { japanese: 'わ', english: 'wa', audio: require('../assets/sounds/hiragana_basic/わ.wav') },
  { japanese: 'を', english: 'wo', audio: require('../assets/sounds/hiragana_basic/を.wav') },
  { japanese: 'ん', english: 'n', audio: require('../assets/sounds/hiragana_basic/ん.wav') },
];

export const hiraganaBeginner: IKanaPair[][] = [
  hiraganaBeginner1,
  hiraganaBeginner2,
  hiraganaBeginner3,
  hiraganaBeginner4,
  hiraganaBeginner5,
  hiraganaBeginner6,
  hiraganaBeginner7,
  hiraganaBeginner8,
  hiraganaBeginner9,
  hiraganaBeginner10,
];

///////////////////////////////////////////////////////////////////////////////////////////////////

const hiraganaIntermediate1: IKanaPair[] = [
  { japanese: 'が', english: 'ga', audio: require('../assets/sounds/hiragana_dakuten/が.wav') },
  { japanese: 'ぎ', english: 'gi', audio: require('../assets/sounds/hiragana_dakuten/ぎ.wav') },
  { japanese: 'ぐ', english: 'gu', audio: require('../assets/sounds/hiragana_dakuten/ぐ.wav') },
  { japanese: 'げ', english: 'ge', audio: require('../assets/sounds/hiragana_dakuten/げ.wav') },
  { japanese: 'ご', english: 'go', audio: require('../assets/sounds/hiragana_dakuten/ご.wav') },
];

const hiraganaIntermediate2: IKanaPair[] = [
  { japanese: 'ざ', english: 'za', audio: require('../assets/sounds/hiragana_dakuten/ざ.wav') },
  { japanese: 'じ', english: 'ji', audio: require('../assets/sounds/hiragana_dakuten/じ.wav') },
  { japanese: 'ず', english: 'zu', audio: require('../assets/sounds/hiragana_dakuten/ず.wav') },
  { japanese: 'ぜ', english: 'ze', audio: require('../assets/sounds/hiragana_dakuten/ぜ.wav') },
  { japanese: 'ぞ', english: 'zo', audio: require('../assets/sounds/hiragana_dakuten/ぞ.wav') },
];

const hiraganaIntermediate3: IKanaPair[] = [
  { japanese: 'ぱ', english: 'pa', audio: require('../assets/sounds/hiragana_handakuten/ぱ.wav') },
  { japanese: 'ぴ', english: 'pi', audio: require('../assets/sounds/hiragana_handakuten/ぴ.wav') },
  { japanese: 'ぷ', english: 'pu', audio: require('../assets/sounds/hiragana_handakuten/ぷ.wav') },
  { japanese: 'ぺ', english: 'pe', audio: require('../assets/sounds/hiragana_handakuten/ぺ.wav') },
  { japanese: 'ぽ', english: 'po', audio: require('../assets/sounds/hiragana_handakuten/ぽ.wav') },
];

const hiraganaIntermediate4: IKanaPair[] = [
  { japanese: 'だ', english: 'da', audio: require('../assets/sounds/hiragana_dakuten/だ.wav') },
  { japanese: 'ぢ', english: 'ji', audio: require('../assets/sounds/hiragana_dakuten/ぢ.wav') },
  { japanese: 'づ', english: 'zu', audio: require('../assets/sounds/hiragana_dakuten/づ.wav') },
  { japanese: 'で', english: 'de', audio: require('../assets/sounds/hiragana_dakuten/で.wav') },
  { japanese: 'ど', english: 'do', audio: require('../assets/sounds/hiragana_dakuten/ど.wav') },
];

export const hiraganaIntermediate: IKanaPair[][] = [
  hiraganaIntermediate1,
  hiraganaIntermediate2,
  hiraganaIntermediate3,
  hiraganaIntermediate4,
];
///////////////////////////////////////////////////////////////////////////////////////////////////

const hiraganaAdvanced1: IKanaPair[] = [
  { japanese: 'きゃ', english: 'kya', audio: require('../assets/sounds/hiragana_yoon/きゃ.wav') },
  { japanese: 'きゅ', english: 'kyu', audio: require('../assets/sounds/hiragana_yoon/きゅ.wav') },
  { japanese: 'きょ', english: 'kyo', audio: require('../assets/sounds/hiragana_yoon/きょ.wav') },
];

const hiraganaAdvanced2: IKanaPair[] = [
  { japanese: 'しゃ', english: 'sha', audio: require('../assets/sounds/hiragana_yoon/しゃ.wav') },
  { japanese: 'しゅ', english: 'shu', audio: require('../assets/sounds/hiragana_yoon/しゅ.wav') },
  { japanese: 'しょ', english: 'sho', audio: require('../assets/sounds/hiragana_yoon/しょ.wav') },
];

const hiraganaAdvanced3: IKanaPair[] = [
  { japanese: 'ちゃ', english: 'cha', audio: require('../assets/sounds/hiragana_yoon/ちゃ.wav') },
  { japanese: 'ちゅ', english: 'chu', audio: require('../assets/sounds/hiragana_yoon/ちゅ.wav') },
  { japanese: 'ちょ', english: 'cho', audio: require('../assets/sounds/hiragana_yoon/ちょ.wav') },
];

const hiraganaAdvanced4: IKanaPair[] = [
  { japanese: 'にゃ', english: 'nya', audio: require('../assets/sounds/hiragana_yoon/にゃ.wav') },
  { japanese: 'にゅ', english: 'nyu', audio: require('../assets/sounds/hiragana_yoon/にゅ.wav') },
  { japanese: 'にょ', english: 'nyo', audio: require('../assets/sounds/hiragana_yoon/にょ.wav') },
];

const hiraganaAdvanced5: IKanaPair[] = [
  { japanese: 'ひゃ', english: 'hya', audio: require('../assets/sounds/hiragana_yoon/ひゃ.wav') },
  { japanese: 'ひゅ', english: 'hyu', audio: require('../assets/sounds/hiragana_yoon/ひゅ.wav') },
  { japanese: 'ひょ', english: 'hyo', audio: require('../assets/sounds/hiragana_yoon/ひょ.wav') },
];

const hiraganaAdvanced6: IKanaPair[] = [
  { japanese: 'みゃ', english: 'mya', audio: require('../assets/sounds/hiragana_yoon/みゃ.wav') },
  { japanese: 'みゅ', english: 'myu', audio: require('../assets/sounds/hiragana_yoon/みゅ.wav') },
  { japanese: 'みょ', english: 'myo', audio: require('../assets/sounds/hiragana_yoon/みょ.wav') },
  { japanese: 'りゃ', english: 'rya', audio: require('../assets/sounds/hiragana_yoon/りゃ.wav') },
  { japanese: 'りゅ', english: 'ryu', audio: require('../assets/sounds/hiragana_yoon/りゅ.wav') },
  { japanese: 'りょ', english: 'ryo', audio: require('../assets/sounds/hiragana_yoon/りょ.wav') },
];

export const hiraganaAdvanced: IKanaPair[][] = [
  hiraganaAdvanced1,
  hiraganaAdvanced2,
  hiraganaAdvanced3,
  hiraganaAdvanced4,
  hiraganaAdvanced5,
  hiraganaAdvanced6,
];

///////////////////////////////////////////////////////////////////////////////////////////////////

const katakanaBeginner1: IKanaPair[] = [
  { japanese: 'ア', english: 'a', audio: require('../assets/sounds/katakana_basic/ア.wav') },
  { japanese: 'イ', english: 'i', audio: require('../assets/sounds/katakana_basic/イ.wav') },
  { japanese: 'ウ', english: 'u', audio: require('../assets/sounds/katakana_basic/ウ.wav') },
  { japanese: 'エ', english: 'e', audio: require('../assets/sounds/katakana_basic/エ.wav') },
  { japanese: 'オ', english: 'o', audio: require('../assets/sounds/katakana_basic/オ.wav') },
];

const katakanaBeginner2: IKanaPair[] = [
  { japanese: 'カ', english: 'ka', audio: require('../assets/sounds/katakana_basic/カ.wav') },
  { japanese: 'キ', english: 'ki', audio: require('../assets/sounds/katakana_basic/キ.wav') },
  { japanese: 'ク', english: 'ku', audio: require('../assets/sounds/katakana_basic/ク.wav') },
  { japanese: 'ケ', english: 'ke', audio: require('../assets/sounds/katakana_basic/ケ.wav') },
  { japanese: 'コ', english: 'ko', audio: require('../assets/sounds/katakana_basic/コ.wav') },
];

const katakanaBeginner3: IKanaPair[] = [
  { japanese: 'サ', english: 'sa', audio: require('../assets/sounds/katakana_basic/サ.wav') },
  { japanese: 'シ', english: 'shi', audio: require('../assets/sounds/katakana_basic/シ.wav') },
  { japanese: 'ス', english: 'su', audio: require('../assets/sounds/katakana_basic/ス.wav') },
  { japanese: 'セ', english: 'se', audio: require('../assets/sounds/katakana_basic/セ.wav') },
  { japanese: 'ソ', english: 'so', audio: require('../assets/sounds/katakana_basic/ソ.wav') },
];

const katakanaBeginner4: IKanaPair[] = [
  { japanese: 'マ', english: 'ma', audio: require('../assets/sounds/katakana_basic/マ.wav') },
  { japanese: 'ミ', english: 'mi', audio: require('../assets/sounds/katakana_basic/ミ.wav') },
  { japanese: 'ム', english: 'mu', audio: require('../assets/sounds/katakana_basic/ム.wav') },
  { japanese: 'メ', english: 'me', audio: require('../assets/sounds/katakana_basic/メ.wav') },
  { japanese: 'モ', english: 'mo', audio: require('../assets/sounds/katakana_basic/モ.wav') },
];

export const katakanaBeginner: IKanaPair[][] = [
  katakanaBeginner1,
  katakanaBeginner2,
  katakanaBeginner3,
  katakanaBeginner4,
];

///////////////////////////////////////////////////////////////////////////////////////////////////

const katakanaIntermediate1: IKanaPair[] = [
  { japanese: 'ガ', english: 'ga', audio: require('../assets/sounds/katakana_dakuten/ガ.wav') },
  { japanese: 'ギ', english: 'gi', audio: require('../assets/sounds/katakana_dakuten/ギ.wav') },
  { japanese: 'グ', english: 'gu', audio: require('../assets/sounds/katakana_dakuten/グ.wav') },
  { japanese: 'ゲ', english: 'ge', audio: require('../assets/sounds/katakana_dakuten/ゲ.wav') },
  { japanese: 'ゴ', english: 'go', audio: require('../assets/sounds/katakana_dakuten/ゴ.wav') },
];

const katakanaIntermediate2: IKanaPair[] = [
  { japanese: 'ダ', english: 'da', audio: require('../assets/sounds/katakana_dakuten/ダ.wav') },
  { japanese: 'ヂ', english: 'ji', audio: require('../assets/sounds/katakana_dakuten/ヂ.wav') },
  { japanese: 'ヅ', english: 'zu', audio: require('../assets/sounds/katakana_dakuten/ヅ.wav') },
  { japanese: 'デ', english: 'de', audio: require('../assets/sounds/katakana_dakuten/デ.wav') },
  { japanese: 'ド', english: 'do', audio: require('../assets/sounds/katakana_dakuten/ド.wav') },
];

const katakanaIntermediate3: IKanaPair[] = [
  { japanese: 'パ', english: 'pa', audio: require('../assets/sounds/katakana_handakuten/パ.wav') },
  { japanese: 'ピ', english: 'pi', audio: require('../assets/sounds/katakana_handakuten/ピ.wav') },
  { japanese: 'プ', english: 'pu', audio: require('../assets/sounds/katakana_handakuten/プ.wav') },
  { japanese: 'ペ', english: 'pe', audio: require('../assets/sounds/katakana_handakuten/ペ.wav') },
  { japanese: 'ポ', english: 'po', audio: require('../assets/sounds/katakana_handakuten/ポ.wav') },
];

export const katakanaIntermediate: IKanaPair[][] = [
  katakanaIntermediate1,
  katakanaIntermediate2,
  katakanaIntermediate3,
];

///////////////////////////////////////////////////////////////////////////////////////////////////

const katakanaAdvanced1: IKanaPair[] = [
  { japanese: 'キャ', english: 'kya', audio: require('../assets/sounds/katakana_yoon/キャ.wav') },
  { japanese: 'キュ', english: 'kyu', audio: require('../assets/sounds/katakana_yoon/キュ.wav') },
  { japanese: 'キョ', english: 'kyo', audio: require('../assets/sounds/katakana_yoon/キョ.wav') },
  { japanese: 'シャ', english: 'sha', audio: require('../assets/sounds/katakana_yoon/シャ.wav') },
  { japanese: 'シュ', english: 'shu', audio: require('../assets/sounds/katakana_yoon/シュ.wav') },
  { japanese: 'ショ', english: 'sho', audio: require('../assets/sounds/katakana_yoon/ショ.wav') },
  { japanese: 'チャ', english: 'cha', audio: require('../assets/sounds/katakana_yoon/チャ.wav') },
];

const katakanaAdvanced2: IKanaPair[] = [
  { japanese: 'ニャ', english: 'nya', audio: require('../assets/sounds/katakana_yoon/ニャ.wav') },
  { japanese: 'ニュ', english: 'nyu', audio: require('../assets/sounds/katakana_yoon/ニュ.wav') },
  { japanese: 'ニョ', english: 'nyo', audio: require('../assets/sounds/katakana_yoon/ニョ.wav') },
  { japanese: 'ミャ', english: 'mya', audio: require('../assets/sounds/katakana_yoon/ミャ.wav') },
  { japanese: 'ミュ', english: 'myu', audio: require('../assets/sounds/katakana_yoon/ミュ.wav') },
  { japanese: 'ミョ', english: 'myo', audio: require('../assets/sounds/katakana_yoon/ミョ.wav') },
  { japanese: 'リャ', english: 'rya', audio: require('../assets/sounds/katakana_yoon/リャ.wav') },
  { japanese: 'リュ', english: 'ryu', audio: require('../assets/sounds/katakana_yoon/リュ.wav') },
  { japanese: 'リョ', english: 'ryo', audio: require('../assets/sounds/katakana_yoon/リョ.wav') },
];


export const katakanaAdvanced: IKanaPair[][] = [
  katakanaAdvanced1,
  katakanaAdvanced2
];

///////////////////////////////////////////////////////////////////////////////////////////////////
