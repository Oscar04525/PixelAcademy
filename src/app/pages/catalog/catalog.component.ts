import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { CartService, Curso } from '../../services/cart.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit {
  public courseService = inject(CourseService);
  public cartService = inject(CartService);

  courses: Curso[] = [];
  toast = signal<string | null>(null);

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

  agregarAlCarrito(curso: Curso) {
    this.cartService.addToCart(curso);
    this.toast.set(`¡${curso.titulo} añadido!`);
    setTimeout(() => this.toast.set(null), 3000);
  }
}
