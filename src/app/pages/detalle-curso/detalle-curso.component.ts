import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { CartService } from '../../services/cart.service';
import { Course } from '../../model/course.model';
import { map } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-detalle-curso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-curso.component.html',
  styleUrl: './detalle-curso.component.css',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ]
})
export class DetalleCursoComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private courseService = inject(CourseService);
  private cartService = inject(CartService);

  course?: Course;
  mostrarMensaje: boolean = false; // Variable para controlar el mensaje

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Mejora: Filtramos directamente en el stream de datos
    this.courseService.getCourses().pipe(
      map((courses: Course[]) => courses.find(c => c.id === id))
    ).subscribe(course => {
      this.course = course;
    });
  }

  agregarAlCarrito() {
    if (this.course) {
      this.cartService.addToCart(this.course);

      // Mostrar mensaje y ocultarlo a los 3 segundos
      this.mostrarMensaje = true;
      setTimeout(() => {
        this.mostrarMensaje = false;
      }, 3000);
    }
  }
}
