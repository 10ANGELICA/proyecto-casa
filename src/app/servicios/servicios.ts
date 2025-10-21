import { Component } from '@angular/core';

interface Video{
  nombre:string;
  ruta:string;
}

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss'
})
export class Servicios {

    videos: Video[]=[
    {nombre:"Video 1", ruta:"1.mp4"},
  ]

}
