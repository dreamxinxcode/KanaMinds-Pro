import { Injectable } from '@angular/core';
import { NativeAudio } from '@capacitor-community/native-audio'
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  async playKana(kana: string) {
    try {
      let path = `${kana}.wav`;

      if(Capacitor.getPlatform() == 'ios') path = 'sounds/' + path;
      await NativeAudio.preload({
        assetId: `${kana}`,
        assetPath: path,
        audioChannelNum: 1,
        isUrl: false
      });
    } catch(e) {
      console.log(e);
    }

    try {
      await NativeAudio.play({
        assetId: `${kana}`,
      });
    } catch(e) {
      console.log(e);
    } finally {
      // await NativeAudio.unload({
      //   assetId: `${kana}`,
      // });
    }
    
  }
}
