import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'; 
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardComponent,
    MenuComponent,
    CardInfoComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    CardComponent,
    MenuComponent,
    CardInfoComponent,
    PaymentComponent
  ]
})
export class SharedModule { }
