import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-birthday2',
  template: `
  <p>The hero's birthday is {{  birthday | date:format | uppercase}}</p>
  <button (click)="toggleFormat()">Toggle Format</button>
  `,
  styleUrls: ['./hero-birthday2.component.css']
})

export class HeroBirthday2Component {
  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
}