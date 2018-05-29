import { DataStorageService } from '../../shared/data-storage.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers'
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
import { Observable } from 'rxjs';
import * as RecipesActions from '../../recipes/store/recipes.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authState: Observable<fromAuth.State>;
  @Output() featureSelect = new EventEmitter<string>();
  constructor(private storageService: DataStorageService,
    private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth')
  }
  onSaveData() {
    // this.storageService.storeRecipes().subscribe(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error)
    //   }
    // );
    this.store.dispatch(new RecipesActions.StoreRecipe())
  }
  onFetchData() {
    // this.storageService.getRecipes();
    this.store.dispatch(new RecipesActions.FetchRecipe());
  }
  onLogout() {
    this.store.dispatch(new AuthActions.LogOut());
  }
}
