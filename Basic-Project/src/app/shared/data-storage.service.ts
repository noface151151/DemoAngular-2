import { Recipe } from './../recipes/recipe-list/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private ricepeService: RecipeService,
    private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.post('https://recipe-bc088.firebaseio.com/recipes.json?auth=' + token, this.ricepeService.getRecipes());
  }
  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get('https://recipe-bc088.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = (<Recipe[]>response.json()['-LBL8NVH6gEldMEtC6Gj']);
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe.ingredients = [];
            }
          }
          return recipes;
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
