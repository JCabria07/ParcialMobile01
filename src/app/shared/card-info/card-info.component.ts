import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { ToastCartService } from 'src/app/services/toast-cart.service';
import { UpdateCartCountService } from 'src/app/services/update-cart-count.service';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
  standalone: false
})
export class CardInfoComponent {

  @Input() product: any; 

  constructor(
    private modalCtrl: ModalController,
    private cartService: CartService,
    private toastCartService: ToastCartService,
    private updateCartCountService: UpdateCartCountService
  ) {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

  getRatingArray(rate: number): number[] {
    return Array(Math.round(rate)).fill(0);
  }

  agregarAlCarrito() {
    if (this.product) {
      this.cartService.addProductCart(this.product); // Agregar el producto al carrito
      this.toastCartService.mostrarToast(true); // Mostrar el mensaje de agregado
      this.updateCartCountService.updateCartCount(); // Actualizar el contador del carrito en tiempo real
    }
  }
}
