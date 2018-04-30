import { Recipe } from './../recipes/recipe-list/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private ricepeService: RecipeService) { }

  storeRecipes() {
    console.log(this.ricepeService.getRecipes());
    return this.http.post('https://recipe-bc088.firebaseio.com/recipes.json', this.ricepeService.getRecipes());
  }
  getRecipes() {
    return this.http.get('https://recipe-bc088.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
          const recipes: Recipe[] = (<Recipe[]>response.json()['-LBL8NVH6gEldMEtC6Gj']);
         // console.log(response.json());
          for (const recipe of recipes) {
            console.log(recipe['ingredients']);
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
