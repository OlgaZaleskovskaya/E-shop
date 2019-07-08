import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserModel } from 'src/app/Model/user.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in'))
    ])]

})
export class SignUpComponent implements OnInit {
  user: UserModel;
  state: string = "default"; //for animation

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = new UserModel("","", "");
  }
  //for animation
  rotate(e) {
    this.state = (this.state === 'default' ? 'rotated' : 'default'); 
  }

  onSubmit(form: NgForm) {
    console.log(form);
    form.resetForm();
    this.router.navigate(["/"]);
  }

  onCancel(form: NgForm) {
    form.resetForm();
    this.router.navigate(["/"]);
  }

}
