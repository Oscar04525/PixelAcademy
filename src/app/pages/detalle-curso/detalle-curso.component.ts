import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router'; // Añade RouterLink
import { CourseService } from '../../services/course.service';
import { Course } from '../../model/course.model';

@Component({
  selector: 'app-detalle-curso',
  standalone: true,
  imports: [RouterLink], // <--- ¡IMPORTANTE!
  templateUrl: './detalle-curso.component.html',
  styleUrl: './detalle-curso.component.css'
})
export class DetalleCursoComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private courseService = inject(CourseService);

  // La interrogación significa que puede ser "undefined" al principio
  course?: Course;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.courseService.getCourses().find(c => c.id === id);
  }
}
