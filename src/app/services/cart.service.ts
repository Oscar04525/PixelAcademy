import { Injectable, signal } from '@angular/core';
import { Course } from '../model/course.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Usamos signals para que la interfaz se actualice sola
  private cart = signal<Course[]>([]);

  getCart() {
    return this.cart();
  }

  addToCart(course: Course) {
    this.cart.update(items => [...items, course]);
  }

  totalPrice() {
    return this.cart().reduce((acc, item) => acc + item.price, 0);
  }

  totalItems() {
    return this.cart().length;
  }

  clearCart() {
    this.cart.set([]);
  }
}
