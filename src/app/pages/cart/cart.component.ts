import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  // Inyectamos el servicio correctamente
  public cartService = inject(CartService);

  // No hace falta poner la lógica aquí si ya está en el servicio,
  // pero si quieres una función propia en el componente sería así:
  eliminarCurso(id: number) {
    this.cartService.removeFromCart(id);
  }

}
