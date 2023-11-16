import { Component } from '@angular/core';
import { GemsService } from 'src/app/services/gems/gems.service';
import { OptionsModalComponent } from './options-modal/options-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-game-tab',
  templateUrl: 'play-tab.page.html',
  styleUrls: ['play-tab.page.scss']
})
export class PlayTabPage {

  currentKanaIndex: number = 0;
  answers: any[] = [];
  incorrectAnswers: any[] = [];
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

  constructor(
    public gems: GemsService, 
    private modalCtrl: ModalController,
  ) {}

  handleAnswer(attempt: any) {
    const isCorrect = attempt.english === this.kanaList[this.currentKanaIndex].english;
    if (isCorrect) {
      console.log('Correct!', this.kanaList[this.currentKanaIndex].japanese, '=', attempt.english)
    } else {
      this.incorrectAnswers.push(this.kanaList[this.currentKanaIndex]);
      console.log('Incorrect!', this.kanaList[this.currentKanaIndex].japanese, '=', this.kanaList[this.currentKanaIndex].english)
    }
    this.answers.push({
      attempt,
      answer: this.kanaList[this.currentKanaIndex],
      isCorrect
    });
    this.updateScore();
    if (this.currentKanaIndex === this.kanaList.length - 1) {
      this.gameComplete = true;
      this.gems.giveGems(this.answers.filter(obj => obj.isCorrect).length);
      return;
    }
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
    // Percentage score
    const correctObjectsCount = this.answers.filter(obj => obj.isCorrect).length;
    const totalObjects = this.answers.length;
    this.percentCorrect = Math.round((correctObjectsCount / totalObjects) * 100);
    // Fraction score
    this.fractionCorrect = `${correctObjectsCount}/${totalObjects}`;
  }

  playAgain() {
    this.currentKanaIndex = 0;
    this.answers = [];
    this.incorrectAnswers = [];
    this.percentCorrect = 0;
    this.fractionCorrect = '';
    this.gameComplete = false;
  }

  async openOptionsModal() {
    const modal = await this.modalCtrl.create({
      component: OptionsModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      
    }
  }
}
