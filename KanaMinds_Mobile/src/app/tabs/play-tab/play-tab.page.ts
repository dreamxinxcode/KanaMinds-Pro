import { Component } from '@angular/core';
import { GemsService } from 'src/app/services/gems/gems.service';
import { OptionsModalComponent } from './options-modal/options-modal.component';
import { ModalController } from '@ionic/angular';
import { AudioService } from 'src/app/services/audio/audio.service';
import { HapticsService } from 'src/app/services/haptics/haptics.service';

@Component({
  selector: 'app-game-tab',
  templateUrl: 'play-tab.page.html',
  styleUrls: ['play-tab.page.scss']
})
export class PlayTabPage {
  currentKanaIndex: number = 0;
  answers: any[] = [];
  incorrectAnswers: any[] = [];
  disableChoices: boolean = false;
  gameComplete: boolean = false;
  percentCorrect: number = 0;
  fractionCorrect: string = '';

  isCorrectAnswer: boolean = false;
  isIncorrectAnswer: boolean = false;
  
  kanaList = [
    { japanese: 'あ', english: 'a' },
    { japanese: 'い', english: 'i' },
    { japanese: 'う', english: 'u' },
    { japanese: 'え', english: 'e' },
    { japanese: 'お', english: 'o' },
  ];
  
  choiceItems = [
    { japanese: 'あ', english: 'a' },
    { japanese: 'い', english: 'i' },
    { japanese: 'う', english: 'u' },
    { japanese: 'え', english: 'e' },
    { japanese: 'お', english: 'o' },
  ];  

  constructor(
    public gems: GemsService, 
    private modalCtrl: ModalController,
    public audio: AudioService,
    private haptics: HapticsService,
  ) {}

  async handleAnswer(attempt: any) {
    const isCorrect = attempt.english === this.kanaList[this.currentKanaIndex].english;
    this.disableChoices = true;

    if (isCorrect) {
      await this.audio.playKana(attempt.english);
      this.isCorrectAnswer = true;
      this.answers.push({
        attempt,
        answer: this.kanaList[this.currentKanaIndex],
        isCorrect
      });
      this.updateScore();
    } else {
      this.isIncorrectAnswer = true;
      this.haptics.hapticsVibrate();
      this.answers.push({
        attempt,
        answer: this.kanaList[this.currentKanaIndex],
        isCorrect
      });
      this.incorrectAnswers.push(this.kanaList[this.currentKanaIndex]);
      setTimeout(() => {
        this.isIncorrectAnswer = false;
      }, 500);
    }
  
    setTimeout(() => {
      this.isCorrectAnswer = false;
      this.disableChoices = false;
      if (this.currentKanaIndex === this.kanaList.length - 1) {
        this.gameComplete = true;
        this.gems.giveGems(this.answers.filter(obj => obj.isCorrect).length);
        return;
      }
      this.currentKanaIndex++;
      this.shuffleChoices();
    }, 500);
  }

  shuffleChoices() {
    for (let i = this.choiceItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.choiceItems[i], this.choiceItems[j]] = [this.choiceItems[j], this.choiceItems[i]];
    }
    this.choiceItems = this.choiceItems.slice();
  }

  updateScore() {
    const correctObjectsCount = this.answers.filter(obj => obj.isCorrect).length;
    const totalObjects = this.answers.length;

    // Percentage score
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
