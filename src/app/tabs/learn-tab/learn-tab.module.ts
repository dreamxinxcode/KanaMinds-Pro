import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LearnTabPage } from './learn-tab.page';

import { LearnTabPageRoutingModule } from './learn-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LearnTabPageRoutingModule
  ],
  declarations: [LearnTabPage]
})
export class LearnTabPageModule {}
