import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Recipe } from './../recipe-list/recipe.model';
import { HttpClient } from '@angular/common/http';
import { Effect, Actions } from '@ngrx/effects';
import * as RecipesActions from './recipes.actions';
import * as fromRecipes from './recipes.reducers';

@Injectable()
export class RecipesEffects {
  @Effect()
  recipeFetch = this.actions$
    .ofType(RecipesActions.FETCH_RECIPE)
    .switchMap((action: RecipesActions.FetchRecipe) => {
      return this.httpClient.get<Recipe[]>('https://recipe-bc088.firebaseio.com/recipes.json',
        {
          observe: 'body',
          responseType: 'json'
        })
        .map(
        (recipes) => {
          const recipesFetch = recipes['-LBL8NVH6gEldMEtC6Gj'];
          console.log(recipesFetch);
          for (const recipe of recipesFetch) {
            if (!recipe['ingredients']) {
              recipe.ingredients = [];
            }
          }
          return {
            type: RecipesActions.SET_RECIPE,
            payload: recipesFetch
          };
        }
        )
    });

  @Effect({ dispatch: false })
  recipeStore = this.actions$
    .ofType(RecipesActions.STORE_RECIPE)
    .withLatestFrom(this.store.select('recipes'))
    .switchMap(([action, state]) => {
      return this.httpClient.post('https://recipe-bc088.firebaseio.com/recipes.json', state.recipes);
    })
    .map((resp)=>{
      console.log(resp);
    })
  // .subscribe((resp) => {
  //   console.log(resp);
  // })


  constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store<fromRecipes.FeatureState>) {

  }
}
