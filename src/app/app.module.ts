import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { GoodsService } from './Services/goods.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CartService } from './Services/cart.service';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthService } from './Services/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ErrorPageComponent,


  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CartModule,
    AuthModule,
    HeaderModule,
    AppRoutingModule,

  ],
  providers: [GoodsService, CartService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
