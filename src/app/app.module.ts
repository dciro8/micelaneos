import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {APP_ROUTING} from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { CssComponent } from './components/css/css.component';
import { ClasesComponent } from './components/clases/clases.component';
import { ResaltadoDirective } from './Directives/resaltado.directive';
import { NgSwithComponent } from './components/ng-swith/ng-swith.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
// import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle/usuario-detalle.component';
// import { UsuarioEditarComponent } from './components/usuario/usuario-editar/usuario-editar.component';
// import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo/usuario-nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    NgstyleComponent,
    CssComponent,
    ClasesComponent,
    ResaltadoDirective,
    NgSwithComponent,
    HomeComponent,
    UsuarioComponent,
    NavBarComponent
    // ,    UsuarioDetalleComponent
    // ,    UsuarioEditarComponent
    // ,UsuarioNuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
