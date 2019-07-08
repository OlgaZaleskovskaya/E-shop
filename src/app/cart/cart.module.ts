import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { AddressComponent } from './address/address.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartComponent, AddressComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule
  ]
})
export class CartModule { }
