import { Component, OnInit } from '@angular/core';
import { UpdateCartCountService } from 'src/app/services/update-cart-count.service';
import { Router } from '@angular/router'; // Importar Router
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: false
})
export class MenuComponent implements OnInit {
  uniqueCartItems: number = 0;

  constructor(
    private cartService: CartService,
    private updateCartCountService: UpdateCartCountService,
    private router: Router // Inyectar Router
  ) {}

  ngOnInit() {
    this.updateCartCountService.cartItems$.subscribe(count => {
      this.uniqueCartItems = count;
    });
    this.updateCartCountService.updateCartCount();
  }

  goToCart() {
    this.router.navigate(['/cart']); // Go to cart.
  }
}
