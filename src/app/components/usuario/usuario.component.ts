import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private rotuer: ActivatedRoute) {
    this.rotuer.params.subscribe(parametros => {
      console.log("Ruta arce");
      console.log(parametros);
    }

    )
  }

  ngOnInit(): void {
  }

}
