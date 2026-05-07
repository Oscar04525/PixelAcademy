import { Injectable } from '@angular/core';
import { Curso } from './cart.service'; // Importa la interfaz que creamos en el servicio del carrito
import cursosData from '../../../public/data/cursos.json';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  // Cambiamos el tipo de Course[] a Curso[]
  private courses: Curso[] = cursosData;

  getCourses(): Curso[] {
    return this.courses;
  }
}
