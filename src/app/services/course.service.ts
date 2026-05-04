import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [


    {
      id: 1, title: 'Unity 2D/3D', description: 'Domina C# y crea juegos.', price: 29.99,
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800' // Setup Gaming
    },
    {
      id: 2, title: 'Unreal Engine 5', description: 'Aprende Blueprints y Lumen.', price: 49.99,
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800' // Pantalla Gaming
    },
    {
      id: 3, title: 'Pixel Art Master', description: 'Diseño retro profesional.', price: 19.99,
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800' // Consolas Retro
    },
    {
      id: 4, title: 'Modelado 3D', description: 'Usa Blender desde cero.', price: 34.99,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800' // Código/3D
    },

    {
      id: 5,
      title: 'Desarrollo Mobile',
      description: 'Juegos para iOS y Android.',
      price: 24.99,
      image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=800'

    },
    {
      id: 6, title: 'Iluminación Avanzada', description: 'Ray Tracing en tiempo real.', price: 39.99,
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800' // Luces Neón Gaming
    }
  ];

  getCourses(): Course[] {
    return this.courses;
  }
}
