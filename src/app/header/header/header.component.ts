import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,

} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '150px',
       width: '150px',
        opacity: 1,
        backgroundColor: 'white',
       
      })),
      state('closed', style({
        height: '10px',
        width: '10px',
        opacity: 0,
        backgroundColor: 'white',
       
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {

  totalAmount: number;
  totalSum: number;
  isCartOpen: boolean;
  subscriptionAmount: Subscription;
  subscriptionSum: Subscription;
  isOpen = false;
  constructor(private cartService: CartService, private router: Router, private authService: AuthService) { }

  ngOnInit() {

    this.isCartOpen = false;
    this.totalAmount = this.cartService.totalAmount;
    this.totalSum = this.cartService.totalSum;



  }

  goToCart(): void {
    this.router.navigate(['/cart']);
    this.isCartOpen = true;

  }

  toAddress(): void {
    this.router.navigate(['/address']);

  }

  onSignIn(): void {
    this.router.navigate(['auth/signIn']);

  }
  onSignUp(): void {
    this.router.navigate(['auth/signUp']);

  }

}
