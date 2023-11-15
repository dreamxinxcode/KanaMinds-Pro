import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayTabPage } from './play-tab.page';

import { PlayTabPageRoutingModule } from './play-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PlayTabPageRoutingModule
  ],
  declarations: [PlayTabPage]
})
export class PlayTabPageModule {}
