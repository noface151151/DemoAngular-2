import * as AuthActions from './../store/auth.actions';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as fromApp from '../../store/app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild('f') signupform = NgForm;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.TrySignup({ username: email, password: password }));
  }
}
