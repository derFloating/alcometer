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

  
}
