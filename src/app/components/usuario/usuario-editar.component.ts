import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html'
})
export class UsuarioEditarComponent implements OnInit {

  constructor(private rotuer: ActivatedRoute) {
    this.rotuer.parent?.params.subscribe(parametros => {
      console.log("Ruta Editar");
      console.log(parametros);
    }

    )
  }

  ngOnInit(): void {
  }

}
