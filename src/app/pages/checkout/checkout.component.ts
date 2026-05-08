import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  public cartService = inject(CartService);

  // Señal para controlar si el pago ya se realizó
  pagoCometido = signal(false);

  // Señal para el estado de "Procesando..." (esto da puntos extra de UX)
  cargandoProceso = signal(false);


  pagar() {
    // 1. Iniciamos el estado de carga
    this.cargandoProceso.set(true);
    setTimeout(() => {
      this.pagoCometido.set(true);
      this.cartService.clearCart();
      this.cargandoProceso.set(false);
    }, 1500);
  }
}
