import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight: number;
  gender: string;
  time: number;
  bottles: number;
  promilles: number;

  constructor() {}

  calculate() {
    const litres = this.bottles * 0.33;
    let grams = litres * 8 * 4.5;
    const burning = this.weight / 10;
    grams -= (burning * this.time);

    if (this.gender === 'male') {
      this.promilles =  grams / (this.weight * 0.7);
    } else {
      this.promilles =  grams / (this.weight * 0.6);
    }

    if (this.promilles < 0) {
      this.promilles = 0;
    }
  }
}
