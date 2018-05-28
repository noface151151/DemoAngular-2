import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as AuthActions from '../auth/store/auth.actions';

@Injectable()
export class AuthService {
  token: string;
  constructor(private router: Router, private store: Store<fromApp.AppState>) { }

  signup(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
      user => {
        this.store.dispatch(new AuthActions.SignUp());
      }
      )
      .catch(
      error => console.log(error)
      );
  }
  signin(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
      response => {
        this.store.dispatch(new AuthActions.SignIn());
        this.router.navigate(['/'])
        firebase.auth().currentUser.getToken()
          .then(
          (token: string) => {
            this.token = token;
            this.store.dispatch(new AuthActions.SetToken(token));
          }
          )
      }
      )
      .catch(
      error => console.log(error)
      );
  }
  logOut() {
    firebase.auth().signOut();
    this.store.dispatch(new AuthActions.LogOut());
  }
}
