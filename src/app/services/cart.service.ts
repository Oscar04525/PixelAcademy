import { Injectable, signal, computed, effect } from '@angular/core';
import { Course } from '../model/course.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey = 'cyber_cart_data';
  public cart = signal<Course[]>(this.loadFromStorage());


  public totalPrice = computed(() => {
    const total = this.cart().reduce((acc, item) => acc + item.precio, 0);
    return parseFloat(total.toFixed(2));
  });

  public totalItems = computed(() => this.cart().length);

  constructor() {

    effect(() => {
      localStorage.setItem(this.storageKey, JSON.stringify(this.cart()));
    });
  }


  private loadFromStorage(): Course[] {
    const saved = localStorage.getItem(this.storageKey);
    return saved ? JSON.parse(saved) : [];
  }



  getCart() {
    return this.cart();
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
}
