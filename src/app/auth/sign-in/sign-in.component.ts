import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserModel } from 'src/app/Model/user.model';
import {
  trigger,
  state,
  style,
  animate,
  transition,

} from '@angular/animations';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
//  styleUrls: ['./sign-in.component.scss'],
//   encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in'))
    ])]
})
export class SignInComponent implements OnInit {
  user: UserModel;
  state: string = "default"; //for animation

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.user = new UserModel("","", "");
  }
  //for animation
  rotate(e) {
    this.state = (this.state === 'default' ? 'rotated' : 'default'); 
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.authService.name = "Misha";
    form.resetForm();
    this.authService.isAuthorized = true;
    this.router.navigate(["/"]);
  }

  onCancel(form: NgForm) {
    form.resetForm();
    this.router.navigate(["/"]);
  }

}
