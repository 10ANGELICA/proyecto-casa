import { Component } from '@angular/core';

interface Servicio {
  icono: string;
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  templateUrl: './servicios.html',
  styleUrls: ['./servicios.scss']
})
export class Servicios {
  videoAyacucho: string = './aya2.mp4'; // 🎥 Ruta del video informativo

  servicios: Servicio[] = [
    {
      icono: '🛏️',
      nombre: 'Habitaciones Confortables',
      descripcion:
        'Ambientes amplios y acogedores, equipados con camas cómodas, baño privado y excelente iluminación natural.'
    },
    {
      icono: '🍳',
      nombre: 'Desayuno Incluido',
      descripcion:
        'Disfruta cada mañana un desayuno tradicional ayacuchano con productos locales frescos y de calidad.'
    },
    {
      icono: '📶',
      nombre: 'Wi-Fi Gratuito',
      descripcion:
        'Conéctate en todo momento con nuestro servicio de internet inalámbrico disponible en todo el hospedaje.'
    },
    {
      icono: '🚗',
      nombre: 'Estacionamiento Privado',
      descripcion:
        'Contamos con un espacio seguro y exclusivo para huéspedes, garantizando la tranquilidad de tu vehículo.'
    },
    {
      icono: '🧹',
      nombre: 'Servicio de Limpieza Diaria',
      descripcion:
        'Nuestro personal mantiene las habitaciones limpias y ordenadas para tu máxima comodidad.'
    },
    {
      icono: '🏞️',
      nombre: 'Excelente Ubicación',
      descripcion:
        'A solo unas cuadras del terminal Wari y cerca de los principales atractivos turísticos de Ayacucho.'
    }
  ];
}
