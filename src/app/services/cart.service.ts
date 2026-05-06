import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Supongamos que tu señal se llama 'cart'
  public cart = signal<any[]>([]);

  getCart() {
    return this.cart();
  }

  totalPrice() {
    return this.cart().reduce((acc, item) => acc + item.price, 0);
  }

  // ESTA ES LA FUNCIÓN QUE DEBE ESTAR EN EL SERVICIO
  removeFromCart(productId: number) {
    this.cart.set(this.cart().filter(item => item.id !== productId));
  }
  addToCart(product: any) {
    // Añadimos el nuevo producto a la lista actual
    this.cart.set([...this.cart(), product]);
    console.log('Producto añadido:', product);
  }
  clearCart() {
    this.cart.set([]); // Establece el carrito como un array vacío
    console.log('Carrito vaciado con éxito');
  }

  totalItems() {
    return "";
  }
}
