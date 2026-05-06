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
    return parseFloat(this.cart().reduce((acc, item) => acc + item.price, 0).toFixed(2));
  }

  removeFromCart(productId: number) {
    this.cart.set(this.cart().filter(item => item.id !== productId));
  }
  addToCart(product: any) {
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
