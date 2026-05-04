import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // <-- ESTE

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink], // <-- Y ESTE
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {}
