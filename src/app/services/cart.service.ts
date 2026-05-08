import { Injectable, signal } from '@angular/core';
import { Course } from '../model/course.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart = signal<Course[]>([]);

  getCart() { return this.cart(); }

  totalPrice() {
    return parseFloat(this.cart().reduce((acc, item) => acc + item.precio, 0).toFixed(2));
  }

  addToCart(product: Course) {
    this.cart.update(items => [...items, product]);
  }

  removeFromCart(productId: number) {
    this.cart.update(items => items.filter(item => item.id !== productId));
  }

  clearCart() {
    this.cart.set([]);
  }

  totalItems() {
    return this.cart().length;
  }
}
