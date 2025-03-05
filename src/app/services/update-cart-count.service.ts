import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateCartCountService {

  private cartItems = new BehaviorSubject<number>(0); // BehaviorSubject para detectar cambios en el carrito en tiempo real.
  cartItems$ = this.cartItems.asObservable();

  constructor() { }

  updateCartCount() {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      const cart = JSON.parse(cartData);
      const uniqueProducts = new Set(cart.map((item: any) => item.id));
      this.cartItems.next(uniqueProducts.size);
    } else {
      this.cartItems.next(0);
    }
  }
}
