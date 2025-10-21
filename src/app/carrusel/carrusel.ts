import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.html',
  styleUrls: ['./carrusel.scss']  // estaba mal: era styleUrls (plural)
})
export class Carrusel implements OnInit, OnDestroy {

  images = [
    'imagen01.png',
    'imagen02.png',
    'imagen04.png',
    'imagen05.png',
    'imagen06.png',
    'imagen07.png',
  ];

  currentImageIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 4000); // cambia cada 4 segundos
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  get currentImage() {
    return this.images[this.currentImageIndex];
  }
}
