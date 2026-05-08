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

  agregarAlCarrito(curso: Course) {
    this.cartService.addToCart(curso);
    this.toast.set(`✅ "${curso.titulo}" añadido al carrito`);
    setTimeout(() => this.toast.set(null), 4000);
  }
}
