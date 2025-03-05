import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { environment } from 'src/environments/environment'; 
import { LoadingService } from '../services/loading.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  products: any[] = []; // Variable para guardar los productos

  constructor(
    private productService: ProductsService,
    private loadingService: LoadingService,
  ) {}

  async ngOnInit() {
    await this.loadingService.show('Cargando productos...'); // Muestra el loader

    this.productService.get(`${environment.apiURL}/products`) 
      .then((data: any) => {
        this.products = data; 
      })
      .catch(error => console.error('Error al cargar productos', error))
      .finally(() => this.loadingService.dismiss()); 
  }
}
