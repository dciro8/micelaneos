import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIO_ROUTER } from './components/usuario/usuario.routers';



const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuario/:id', component: UsuarioComponent,
  children:USUARIO_ROUTER
  // [
  //   { path: 'nuevo', component: UsuarioNuevoComponent },
  //   { path: 'editar', component: UsuarioEditarComponent },
  //   { path: 'detalle', component: UsuarioDetalleComponent }
  //   ,  
  //   {
  //     path: '**', pathMatch: 'full', redirectTo: 'nuevo'
  //   }
  // ]
 },  
  {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  }
];
export const APP_ROUTING = RouterModule.forRoot(app_routes)
