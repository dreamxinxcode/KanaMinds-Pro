import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayTabPage } from './play-tab.page';

import { PlayTabPageRoutingModule } from './play-tab-routing.module';
import { OptionsModalComponent } from './options-modal/options-modal.component';
import { CountUpModule } from 'ngx-countup';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PlayTabPageRoutingModule,
    CountUpModule,
  ],
  declarations: [PlayTabPage, OptionsModalComponent]
})
export class PlayTabPageModule {}
