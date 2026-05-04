import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service'; // Ruta corregida
import { Course } from '../../model/course.model';        // Ruta corregida

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  // Inyectamos el servicio como público para que el HTML pueda leerlo
  public cartService = inject(CartService);

  // Función opcional por si quieres dar la opción de eliminar
  eliminar(id: number) {
    this.cartService.cartItems.update(items => items.filter(i => i.id !== id));
  }
}
