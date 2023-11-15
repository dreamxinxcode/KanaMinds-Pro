import { Component, NgZone } from '@angular/core';
import { SettingsService } from './services/settings/settings.service';
import { Platform } from '@ionic/angular';
import { DBService } from './services/db/db.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public isWeb: boolean = false;
  private initPlugin!: boolean; // Add the ! here

  constructor(
    private settingsService: SettingsService,
    private platform: Platform,
    private db: DBService,
    private ngZone: NgZone
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.settingsService.setTheme();
      this.db.initializePlugin().then(async (ret) => {
        this.initPlugin = ret;
        if( this.db.platform === "web") {
          this.isWeb = true;
          await customElements.whenDefined('jeep-sqlite');
          const jeepSqliteEl = document.querySelector('jeep-sqlite');
          if(jeepSqliteEl != null) {
            await this.db.initWebStore();
            console.log(`>>>> isStoreOpen ${await jeepSqliteEl.isStoreOpen()}`);
          } else {
            console.log('>>>> jeepSqliteEl is null');
          }
        }

        console.log(`>>>> in App  this.initPlugin ${this.initPlugin}`);
      });
    });
  }
}
