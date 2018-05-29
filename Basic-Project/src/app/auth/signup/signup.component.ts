import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../store/auth.reducers';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') signupform = NgForm;
  constructor(private store: Store<fromAuth.State>) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.TrySignup({ username: email, password: password }));
  }
}
