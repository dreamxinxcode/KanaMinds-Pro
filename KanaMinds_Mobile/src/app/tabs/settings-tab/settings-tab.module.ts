import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsTabPage } from './settings-tab.page';

import { SettingsTabPageRoutingModule } from './settings-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SettingsTabPageRoutingModule
  ],
  declarations: [SettingsTabPage]
})
export class Tab3PageModule {}
