import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  finalizarCompra() {
    alert('¡Compra realizada con éxito! Recibirás un correo en breve.');
    // Aquí podrías vaciar el carrito si quisieras
    // this.cartService.cartItems.set([]);
  }
}
