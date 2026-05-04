import { Injectable, signal, computed } from '@angular/core';
import { Course } from '../model/course.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = signal<Course[]>([]);

  // Función para obtener los items
  getCart() {
    return this.cart();
  }

  // Función para añadir al carrito
  addToCart(course: Course) {
    this.cart.update(items => [...items, course]);
  }

  // Función que cuenta cuántos hay (el número que sale en el botón)
  totalItems() {
    return this.cart().length;
  }

  // Función para calcular el precio total
  totalPrice() {
    return this.cart().reduce((acc, item) => acc + item.price, 0);
  }

  clearCart() {
    this.cart.set([]);
  }
}
