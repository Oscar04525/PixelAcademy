import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <--- ESTO

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink], // <--- Y ESTO
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { }
