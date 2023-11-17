import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeaderboardTabPage } from './leaderboard-tab.page';

import { LeaderboardTabPageRoutingModule } from './leaderboard-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LeaderboardTabPageRoutingModule
  ],
  declarations: [LeaderboardTabPage]
})
export class LeaderboardTabPageModule {}
