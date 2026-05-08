import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private http = inject(HttpClient);
  private jsonUrl = 'cursos.json';

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.jsonUrl);
  }
}
