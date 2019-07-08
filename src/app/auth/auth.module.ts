import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [SignInComponent, SignUpComponent, AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    AuthComponent
  ]

})
export class AuthModule { }
