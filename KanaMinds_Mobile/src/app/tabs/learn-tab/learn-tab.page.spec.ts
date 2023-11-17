import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';


import { LearnTabPage } from './learn-tab.page';

describe('LearnTabPage', () => {
  let component: LearnTabPage;
  let fixture: ComponentFixture<LearnTabPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearnTabPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearnTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
