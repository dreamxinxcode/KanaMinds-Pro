import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard-tab',
  templateUrl: 'leaderboard-tab.page.html',
  styleUrls: ['leaderboard-tab.page.scss']
})
export class LeaderboardTabPage implements OnInit {

  leaderboard: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/leaderboard').subscribe({
      next: (res: any) => {
        this.leaderboard = res;
      },
      error: (err) => {

      }
    });
  }

}
