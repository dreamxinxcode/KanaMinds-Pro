import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardTabPage } from './leaderboard-tab.page';

const routes: Routes = [
  {
    path: '',
    component: LeaderboardTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderboardTabPageRoutingModule {}
