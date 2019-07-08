import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { SelectedGoodModel } from 'src/app/Model/selectedGood.model';
import { NumberFormatStyle } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private router: Router) { }
  goods: SelectedGoodModel[];


  ngOnInit() {

  }
  addUnit(i: NumberFormatStyle): void {
    this.cartService.addUnit(i);

  }
  removeUnit(i: number) {
    this.cartService.removeUnit(i);

  }

  emptyCart() {
    this.cartService.emptyCart();


  }

  placeOrder() {
    this.router.navigate(['/address']);

  }

}
