import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false
})
export class CartPage implements OnInit {
  cartItems: any[] = [];
  showPayment: boolean = false; // Controla si se muestra el componente de pago

  constructor(private cartService: CartService, private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']); // Navegar a la página de inicio
  }
  
  ngOnInit() {
    this.loadCart();
    this.cartService.cartUpdated.subscribe(() => this.loadCart()); // Subscribirnos para escuchar cambios en el carrito
  }

  loadCart() {
    const cartData = this.cartService.getCart();

    // Agrupar productos por ID y sumar cantidades
    const groupedCart: { [id: number]: any } = {};
    cartData.forEach((item: any) => {
      if (groupedCart[item.id]) {
        groupedCart[item.id].quantity += 1;
      } else {
        groupedCart[item.id] = { ...item, quantity: 1 };
      }
    });

    this.cartItems = Object.values(groupedCart);
  }

  increaseQuantity(item: any) {
    this.cartService.addProductCart(item);
    this.loadCart();
  }

  decreaseQuantity(item: any) {
    const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
    if (item.quantity > 1) {
      this.cartItems[index].quantity--;
      this.cartService.removeFromCart(index);
      this.loadCart();
    } else {
      this.removeItem(index);
    }
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
    this.loadCart();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  togglePayment() {
    this.showPayment = !this.showPayment; // Alterna la visibilidad del componente de pago
  }
}
