import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GemsService {

  constructor() { }

  giveGems(amount: number) {
    const current = this.getGems();
    if (current) {
      window.localStorage.setItem('gems', (current + amount).toString());
    } else {
      window.localStorage.setItem('gems', amount.toString());
    }
  }

  getGems(): number {
    const current = window.localStorage.getItem('gems');
    if (!current) {
      window.localStorage.setItem('gems', '0');
    }
    return Number(window.localStorage.getItem('gems'));
  }
}
