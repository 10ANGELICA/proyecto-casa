import { Component } from '@angular/core';
import { Info } from "../info/info";
import { Carrusel } from '../carrusel/carrusel';

@Component({
  selector: 'app-inicio',
  imports: [Carrusel,Info],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {

  
}
