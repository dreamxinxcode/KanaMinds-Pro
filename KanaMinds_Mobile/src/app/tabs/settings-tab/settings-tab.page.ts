import { Component } from '@angular/core';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-settings-tab',
  templateUrl: 'settings-tab.page.html',
  styleUrls: ['settings-tab.page.scss']
})
export class SettingsTabPage {

  constructor(public settingsService: SettingsService) {}

}
