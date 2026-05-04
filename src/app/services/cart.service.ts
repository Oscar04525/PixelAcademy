import { Injectable, signal, computed } from '@angular/core';
import { Course } from '../model/course.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // El almacén de cursos (Signal)
  cartItems = signal<Course[]>([]);

  // Contador total (Computed)
  cartCount = computed(() => this.cartItems().length);

  // Precio total (Computed)
  totalPrice = computed(() =>
    this.cartItems().reduce((acc, item) => acc + item.price, 0)
  );

  // En cart.service.ts
  addToCart(course: Course) {
    this.cartItems.update(currentItems => [...currentItems, course]);
    console.log('Contenido del carrito:', this.cartItems()); // Chivato para la consola
  }
}
