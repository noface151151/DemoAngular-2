import { Recipe } from './../recipes/recipe-list/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient, private ricepeService: RecipeService,
    private authService: AuthService) { }

  storeRecipes() {
    // const token = this.authService.getToken();
    //  const headers = new HttpHeaders().set('Authorization', 'Bearer asdddj');
    return this.httpClient.post('https://recipe-bc088.firebaseio.com/recipes.json', this.ricepeService.getRecipes(),
      {
        //  headers: headers
        //  params: new HttpParams().set('auth', token)
      });
  }
  getRecipes() {
    // const token = this.authService.getToken();
    return this.httpClient.get<Recipe[]>('https://recipe-bc088.firebaseio.com/recipes.json',
      {
        observe: 'body',
        responseType: 'json'
      })
      .map(
      (recipes) => {
        const recipesFetch = recipes['-LBL8NVH6gEldMEtC6Gj'];
        for (const recipe of recipesFetch) {
          if (!recipe['ingredients']) {
            recipe.ingredients = [];
          }
        }
        return recipesFetch;
      }
      )
      .subscribe(
      (recipes: Recipe[]) => {
        this.ricepeService.setRecipes(recipes);
      },
      (error: Response) => {
        console.log(error);
      }
      );
  }
}
