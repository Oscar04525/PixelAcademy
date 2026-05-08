import { Component, inject, OnInit, signal } from '@angular/core';
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
  toast = signal<string | null>(null);

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

  /**
   * Agrega un curso seleccionado al carrito global y dispara una notificación visual.
   * @param curso Objeto de tipo Course proveniente del catálogo.
   */
  agregarAlCarrito(curso: Course) {
    this.cartService.addToCart(curso);
    // Mensaje dinámico con estilo Cyberpunk
    this.toast.set(`🚀 Módulo "${curso.titulo}" vinculado a tu terminal`);

    // Limpiar el toast después de 4 segundos
    setTimeout(() => {
      this.toast.set(null);
    }, 4000);
  }
}
