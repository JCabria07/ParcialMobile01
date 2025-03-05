import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastCartService {

  constructor(private toastController: ToastController) {}

  async mostrarToast(agregado: boolean) {
    const mensaje = agregado ? 'Producto agregado al carrito' : 'Producto removido del carrito';
    const color = agregado ? 'success' : 'danger';

    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
      color: color,
      htmlAttributes: { role: 'alert' }
    });

    await toast.present();
  }
}
