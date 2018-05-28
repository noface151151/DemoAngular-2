import { Observable } from 'rxjs/Observable';
import * as AuthActions from './auth.actions';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { fromPromise } from 'rxjs/observable/fromPromise';

@Injectable()
export class AuthEffects {
    @Effect()
    authSignUp = this.actions$
        .ofType(AuthActions.TRY_SIGNUP)
        .map((action: AuthActions.TrySignup) => {
            return action.payload;
        })
        .switchMap((authData: { username: string, password: string }) => {
            return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
        })
        .switchMap(() => {
            return fromPromise(firebase.auth().currentUser.getIdToken());
        })
        .mergeMap((token: string) => {
            return [
                {
                    type: AuthActions.SIGNUP
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ]
        });

    constructor(private actions$: Actions) {

    }
}

