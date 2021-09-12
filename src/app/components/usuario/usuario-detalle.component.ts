import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html'
})
export class UsuarioDetalleComponent implements OnInit {

  constructor(private rotuer: ActivatedRoute) {
    this.rotuer.parent?.params.subscribe(parametros => {
      console.log("Ruta Detale");
      console.log(parametros);
    }

    )
  }

  ngOnInit(): void {
  }

}
