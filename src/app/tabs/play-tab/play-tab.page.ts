import { Component } from '@angular/core';

@Component({
  selector: 'app-game-tab',
  templateUrl: 'play-tab.page.html',
  styleUrls: ['play-tab.page.scss']
})
export class PlayTabPage {

  currentKanaIndex: number = 0;
  answers: any[] = [];
  gameComplete: boolean = false;
  percentCorrect: number = 0;
  fractionCorrect: string = '';

  kanaList = [
    { japanese: 'あ', english: 'A' },
    { japanese: 'い', english: 'I' },
    { japanese: 'う', english: 'U' },
    { japanese: 'え', english: 'E' },
    { japanese: 'お', english: 'O' },
  ];
  
  choiceItems = [
    { japanese: 'あ', english: 'A' },
    { japanese: 'い', english: 'I' },
    { japanese: 'う', english: 'U' },
    { japanese: 'え', english: 'E' },
    { japanese: 'お', english: 'O' },
  ];  

  constructor() {}

  handleAnswer(attempt: any) {
    const isCorrect = attempt.english === this.kanaList[this.currentKanaIndex].english;
    if (isCorrect) {
      console.log('Correct!', this.kanaList[this.currentKanaIndex].japanese, '=', attempt.english)
    } else {
      console.log('Incorrect!', this.kanaList[this.currentKanaIndex].japanese, '=', this.kanaList[this.currentKanaIndex].english)
    }
    this.answers.push({
      attempt,
      answer: this.kanaList[this.currentKanaIndex],
      isCorrect
    });
    this.updateScore();
    this.currentKanaIndex++;
    this.shuffleChoices();
  }

  shuffleChoices() {
    for (let i = this.choiceItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.choiceItems[i], this.choiceItems[j]] = [this.choiceItems[j], this.choiceItems[i]];
    }
    this.choiceItems = this.choiceItems.slice();
  }

  updateScore() {
    // Percentage
    const correctObjectsCount = this.answers.filter(obj => obj.isCorrect).length;
    const totalObjects = this.answers.length;
    this.percentCorrect = Math.round((correctObjectsCount / totalObjects) * 100);
    // Fraction
    this.fractionCorrect = `${correctObjectsCount}/${totalObjects}`;
  }
}
