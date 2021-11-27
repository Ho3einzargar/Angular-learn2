import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-booster',
  template: `<h2>Power Booster</h2>
  <p class="salam">Super power boost: {{2 | exponentialStrength: 4}}</p>
  `,
  styleUrls: ['./power-booster.component.css']
})
export class PowerBoosterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
