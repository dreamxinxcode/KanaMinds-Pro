import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('./play-tab/play-tab.module').then(m => m.PlayTabPageModule)
      },
      {
        path: 'LeaderboardTab',
        loadChildren: () => import('./leaderboard-tab/leaderboard-tab.module').then(m => m.LeaderboardTabPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('./settings-tab/settings-tab.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
