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

  pagoCometido = signal(false);
  cargandoProceso = signal(false);


  metodoPago = signal<string>('tarjeta');


  cambiarMetodo(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.metodoPago.set(target.value);
  }

  pagar() {
    if (this.metodoPago() === 'paypal') {
      window.location.href = 'https://www.paypal.com';
      return;
    }

    this.cargandoProceso.set(true);

    setTimeout(() => {
      this.pagoCometido.set(true);
      this.cartService.clearCart();
      this.cargandoProceso.set(false);
    }, 1500);
  }
}
