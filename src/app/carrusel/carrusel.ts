import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.html',
  styleUrls: ['./carrusel.scss']
})
export class Carrusel implements OnInit, OnDestroy {
  images = [
    {
      src: 'imagen01.png',
      title: 'Habitación Simple',
      description: 'Perfecta para viajeros individuales, con cama cómoda, Wi-Fi gratuito y baño privado.'
    },
    {
      src: 'imagen02.png',
      title: 'Habitación Doble',
      description: 'Ideal para parejas, con una cama matrimonial, decoración cálida y excelente iluminación natural.'
    },
    {
      src: 'imagen04.png',
      title: 'Habitación Familiar',
      description: 'Espaciosa y acogedora, con capacidad hasta 4 personas, TV por cable y vista a la ciudad.'
    },
    {
      src: 'imagen05.png',
      title: 'Suite Premium',
      description: 'Lujo y confort con balcón privado, escritorio de trabajo y mini bar.'
    },
    {
      src: 'imagen06.png',
      title: 'Habitación Económica',
      description: 'Sencilla pero cómoda, ideal para estancias cortas con todas las comodidades básicas.'
    }
  ];

  currentImageIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 4000);
  }

  stopCarousel(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  prevImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.images.length;
  }
}
