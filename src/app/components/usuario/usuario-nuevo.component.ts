import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html'
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private rotuer: ActivatedRoute) {
    this.rotuer.parent?.params.subscribe(parametros => {
      console.log("Ruta Nuevo");
      console.log(parametros);
    }

    )
  }
  ngOnInit(): void {
  }

}
