import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading: HTMLIonLoadingElement | null = null;

  constructor(private readonly loadC: LoadingController) { }

  async show(message: string = 'LOADING, WAIT A FEW...') {
    this.loading = await this.loadC.create({
      message,
      spinner: 'dots',
       duration: 9000
    });
    await this.loading.present();
  }

  async dismiss() {
    if (this.loading) {
      await this.loading.dismiss();
      this.loading = null;
    }
  }
}

