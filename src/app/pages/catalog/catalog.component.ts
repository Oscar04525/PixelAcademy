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
  isLoading = signal(true); // Control de carga para el Skeleton
  toast = signal<string | null>(null);

  ngOnInit(): void {
    // Simulamos carga de red de 1.5 segundos
    setTimeout(() => {
      this.courseService.getCourses().subscribe(data => {
        this.courses = data;
        this.isLoading.set(false);
      });
    }, 1500);
  }

  agregarAlCarrito(curso: Course) {
    this.cartService.addToCart(curso);
    this.toast.set(`🚀 Módulo "${curso.titulo}" vinculado a tu terminal`);

    setTimeout(() => {
      this.toast.set(null);
    }, 4000);
  }
}
