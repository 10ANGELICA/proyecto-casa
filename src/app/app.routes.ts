import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Servicios } from './servicios/servicios';

export const routes: Routes = [
    {path: '', component:Inicio},
    {path: 'nuestros servicios', component:Servicios},
    { path: '**', redirectTo: '', pathMatch: 'full' }    
    
];
