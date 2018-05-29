import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private store: Store<fromApp.AppState>) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.store.select('auth')
      .take(1)
      .map((authState: fromAuth.State) => {
        return authState.authenticate;
      })
  }
}
