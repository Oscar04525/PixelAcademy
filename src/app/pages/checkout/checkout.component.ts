import { Component, inject } from '@angular/core'; // Añade inject
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service'; // Importa tu servicio

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  // Esta es la línea que te faltaba para que el HTML funcione
  public cartService = inject(CartService);

  pagar() {
    alert('¡Gracias por tu compra!');
    this.cartService.clearCart(); // Vacía el carrito al terminar[cite: 1]
  }
}
