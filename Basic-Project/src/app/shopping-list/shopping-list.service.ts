import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'app/shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
  ingredientsChange = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 5),
    new Ingredient('Banana', 5)
  ];
   ingredientAdd = new EventEmitter<Ingredient>();
  constructor() { }

  getIngredient() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.next(this.ingredients.slice())
  }
  addIngredientList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChange.next(this.ingredients.slice())
  }
}
