import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./inicio/inicio').then(m => m.Inicio)},
    {path: 'servicios', loadComponent: () => import('./servicios/servicios').then(m => m.Servicios)},
    {path: 'contacto', loadComponent: () => import('./contacto/contacto').then(m => m.Contacto)},
    {path: '**', redirectTo: '', pathMatch: 'full' },

];
