import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { ToastCartService } from 'src/app/services/toast-cart.service';
import { CardInfoComponent } from '../card-info/card-info.component';
import { UpdateCartCountService } from 'src/app/services/update-cart-count.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: false
})
export class CardComponent {

  constructor(
    private modalCtrl: ModalController, 
    private toastCartService: ToastCartService,
    private cartService: CartService,
    private updateCart: UpdateCartCountService
  ) {}

  @Input() product: any; 

  async verDetalles(product: any) {
    console.log("Ver detalles de:", product);
    
    const modal = await this.modalCtrl.create({
      component: CardInfoComponent,
      componentProps: { product } // Pasar el producto al modal
    });

    return await modal.present();
  }
  
  agregarAlCarrito(product: any) {
    this.cartService.addProductCart(product); // Agregar el producto al carrito
    this.toastCartService.mostrarToast(true); 
    this.updateCart.updateCartCount();
  }
}
