import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { CartService, Curso } from '../../services/cart.service';

@Component({
  selector: 'app-detalle-curso',
  standalone: true,
  imports: [CommonModule], // Quitamos RouterLink si no hay enlaces en el HTML
  templateUrl: './detalle-curso.component.html',
  styleUrl: './detalle-curso.component.css'
})
export class DetalleCursoComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private courseService = inject(CourseService);
  public cartService = inject(CartService);

  course?: Curso;

  ngOnInit() {
    // Obtenemos el ID de la URL y buscamos el curso
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.courseService.getCourses().find(c => c.id === id);
  }

  agregarAlCarrito() {
    if (this.course) {
      this.cartService.addToCart(this.course);
    }
  }
}
