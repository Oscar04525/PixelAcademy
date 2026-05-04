import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { CartService } from '../../services/cart.service';
import { Course } from '../../model/course.model';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  private courseService = inject(CourseService);
  public cartService = inject(CartService);

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  agregarAlCarrito(curso: Course) {
    console.log('¡Botón pulsado! Intentando añadir:', curso.title); // <-- AÑADE ESTA LÍNEA
    this.cartService.addToCart(curso);
  }
}
