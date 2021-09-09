import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  template:`
  <!-- <p [style.font-size]="{'': tamano+'px'}">HOla </p>-->
  <p [style.fontSize.px]="tamano">Hola Soy David Ciro </p>
  
  <button class="btn btn-primary" (click)="tamano=tamano+5">
  <i class="fa fa-plus"></i>
  </button>

  
  <button class="btn btn-primary" (click)="tamano=tamano-5">
  <i class="fa fa-minus"></i>
  </button>
`,
  styles:[]
})
export class NgstyleComponent implements OnInit {

  constructor() { }

  tamano:number=30;

  ngOnInit(): void {
  }

}
