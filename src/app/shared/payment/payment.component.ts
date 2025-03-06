import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  standalone: false
})
export class PaymentComponent {

  isLoading = false; // Para la animación de carga
  total: number = 0;

  paymentData = {
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    method: ''
  };

  constructor(
    private router: Router,
    private toastController: ToastController,
    private cartService: CartService,
    
  ) {}

  ngOnInit() {
    this.total = this.cartService.getTotalValue(); // Obtener el total del carrito
  }

  async processPayment() {
    if (!this.validatePaymentData()) {
      this.showToast('Por favor, completa todos los campos correctamente', 'danger');
      return;
    }

    this.isLoading = true; 

    setTimeout(async () => {
      this.isLoading = false; 
      await this.showToast('Compra realizada con éxito', 'success');
      this.router.navigate(['/invoice']); 
    }, 2000);
  }

  private validatePaymentData(): boolean {
    const { name, cardNumber, expiry, cvv, method } = this.paymentData;

    if (!name || !cardNumber || !expiry || !cvv || !method) {
      return false;
    }

    if (cardNumber.length !== 16 || isNaN(Number(cardNumber))) {
      return false;
    }

    if (cvv.length !== 3 || isNaN(Number(cvv))) {
      return false;
    }

    return true;
  }

  private async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
      color
    });
    await toast.present();
  }

  
}
