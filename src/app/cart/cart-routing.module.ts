import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  {path: 'cart', component: CartComponent},
  {path: 'address', component: AddressComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
