import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart/cart.component';
import { AddressComponent } from './cart/address/address.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
const appRoutes: Routes =[
//{path: 'not-found', component: PageNotFoundComponent},
{path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'}},
{path: '**', redirectTo: "not-found"}
 
  

]



@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
