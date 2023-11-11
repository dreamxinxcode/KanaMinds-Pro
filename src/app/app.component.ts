import { Component, OnInit } from '@angular/core';
import { SettingsService } from './services/settings/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    // Check if the app has been installed before
    const isAppInstalled = localStorage.getItem('isAppInstalled');

    if (!isAppInstalled) {
      // Set the dark theme for the first time
      this.settingsService.toggleDarkMode();

      // Mark the app as installed to avoid setting the theme on every app open
      localStorage.setItem('isAppInstalled', 'true');
    }
  }
}
