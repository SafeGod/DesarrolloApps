import { Routes } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { Component } from '@angular/core';
import { SecundariaComponent } from './paginas/secundaria/secundaria.component';
import { NotfoundComponent } from './paginas/notfound/notfound.component';
import { TerceroComponent } from './tercero/tercero.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    {
        path: 'principito',
        component: PrincipalComponent
    },
    {
        path: 'secundita',
        component: SecundariaComponent
    },
    {
        path: 'tercero',
        component: TerceroComponent
    },
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: '**',
        component: NotfoundComponent
    }
];
