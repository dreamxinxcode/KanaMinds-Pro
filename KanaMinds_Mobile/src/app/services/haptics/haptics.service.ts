import { Injectable } from '@angular/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Injectable({
  providedIn: 'root'
})
export class HapticsService {

  constructor() { }

  async hapticsImpactMedium() {
    await Haptics.impact({ style: ImpactStyle.Medium });
  };

  async hapticsImpactLight() {
    await Haptics.impact({ style: ImpactStyle.Light });
  };

  async hapticsVibrate() {
    await Haptics.vibrate();
  };

  async hapticsSelectionStart() {
    await Haptics.selectionStart();
  };

  async hapticsSelectionChanged() {
    await Haptics.selectionChanged();
  };

  async hapticsSelectionEnd() {
    await Haptics.selectionEnd();
  };
}
