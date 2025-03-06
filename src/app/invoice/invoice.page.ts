import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity?: number;
  subtotal?: number;
}

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
  standalone: false
})
export class InvoicePage implements OnInit {
  date: string = new Date().toLocaleDateString();
  client: string = 'USER_001';
  invoiceNumber: string = Math.floor(Math.random() * 1000000).toString();
  items: Product[] = [];
  total: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    const cart = localStorage.getItem('cart');
    console.log('Cart in localStorage:', cart);

    if (cart) {
      try {
        this.items = JSON.parse(cart).map((item: Product) => ({
          ...item,
          quantity: item.quantity ?? 1, 
          subtotal: (item.quantity ?? 1) * item.price 
        }));

        this.total = this.items.reduce((acc, item) => acc + (item.subtotal ?? 0), 0);
        
        console.log('Loaded items:', this.items);
        console.log('Total calculated:', this.total);
      } catch (error) {
        console.error('Error parsing cart:', error);
      }
    }
  }

  goBackHome() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
