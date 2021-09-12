import { Component } from '@angular/core';
import {Routes } from '@angular/router';
import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioComponent } from './usuario.component';



export const USUARIO_ROUTER: Routes = [

    // { path: 'nuevo/:param1', component: UsuarioNuevoComponent },
    // { path: 'editar/:param2', component: UsuarioEditarComponent },
    // { path: 'detalle/:param3', component: UsuarioDetalleComponent },
    // { path: '**', pathMatch: 'full', redirectTo: 'nuevo' },

    { path: 'nuevo', component: UsuarioNuevoComponent },
    { path: 'editar', component: UsuarioEditarComponent },
    { path: 'detalle', component: UsuarioDetalleComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'nuevo' },
];