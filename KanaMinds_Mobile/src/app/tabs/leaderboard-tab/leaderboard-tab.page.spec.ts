import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeaderboardTabPage } from './leaderboard-tab.page';

describe('LeaderboardTabPage', () => {
  let component: LeaderboardTabPage;
  let fixture: ComponentFixture<LeaderboardTabPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaderboardTabPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeaderboardTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
