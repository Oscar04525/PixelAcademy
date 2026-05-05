import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    {
      id: 1,
      title: 'Unity 2D/3D',
      description: 'Domina el motor de juegos más popular del mundo. Aprenderás C# desde cero, física de objetos, animaciones, sistemas de partículas e inteligencia artificial básica. Al terminar serás capaz de publicar tu propio juego en Steam o itch.io.',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800'
    },
    {
      id: 2,
      title: 'Unreal Engine 5',
      description: 'El motor usado en los AAA más grandes de la industria. Aprende el sistema visual de Blueprints sin necesidad de programar, y domina Lumen (iluminación global en tiempo real) y Nanite (geometría de nivel cinematográfico). Ideal para crear experiencias next-gen.',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800'
    },
    {
      id: 3,
      title: 'Pixel Art Master',
      description: 'Aprende a crear sprites, tilesets y animaciones con estética retro profesional usando Aseprite. Desde los fundamentos del color y la perspectiva isométrica hasta técnicas avanzadas de shading. El arte pixel está más vivo que nunca gracias a juegos como Celeste o Stardew Valley.',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800'
    },
    {
      id: 4,
      title: 'Modelado 3D',
      description: 'Domina Blender completamente desde cero. Aprenderás modelado poligonal, escultura digital, UV unwrapping, rigging de personajes y renderizado con Cycles y EEVEE. Al finalizar tendrás un portfolio con 3 modelos listos para usar en Unity o Unreal.',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800'
    },
    {
      id: 5,
      title: 'Desarrollo Mobile',
      description: 'Crea juegos para iOS y Android usando Unity con el paquete de herramientas mobile. Aprenderás a optimizar rendimiento para dispositivos de gama baja, integrar anuncios y monetización, y publicar en Google Play y App Store paso a paso.',
      price: 24.99,
      image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Iluminación Avanzada',
      description: 'Lleva tus escenas al siguiente nivel con técnicas de iluminación profesional. Aprenderás Ray Tracing en tiempo real, baked lighting, HDRi, efectos de post-procesado como bloom, motion blur y aberración cromática. Compatible con Unity y Unreal Engine 5.',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800'
    }
  ];

  getCourses(): Course[] {
    return this.courses;
  }
}
