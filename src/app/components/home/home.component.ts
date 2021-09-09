import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ngstyle></app-ngstyle>
  <app-css></app-css>


  <app-clases></app-clases>
  <app-ng-swith></app-ng-swith>
  <h1 [appResaltado]="'orange'">Proceso asincrono</h1>`

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
