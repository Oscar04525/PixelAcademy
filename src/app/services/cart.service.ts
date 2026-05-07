import { Injectable, signal } from '@angular/core';

export interface Curso {
  id: number;
  titulo: string;
  precio: number;
  imagen: string;
  categoria: string;
  nivel: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart = signal<Curso[]>([]);

  getCart() { return this.cart(); }

  totalPrice() {
    return parseFloat(this.cart().reduce((acc, item) => acc + item.precio, 0).toFixed(2));
  }

  addToCart(product: Curso) {
    this.cart.update(items => [...items, product]);
  }

  removeFromCart(productId: number) {
    this.cart.update(items => items.filter(item => item.id !== productId));
  }

  clearCart() {
    this.cart.set([]);
  }
}
