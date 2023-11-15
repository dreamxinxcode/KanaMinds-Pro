import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnTabPage } from './learn-tab.page';

const routes: Routes = [
  {
    path: '',
    component: LearnTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnTabPageRoutingModule {}
