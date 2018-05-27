import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'app/shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
  ingredientsChange = new Subject<Ingredient[]>();
  startEditting = new Subject<number>();
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 5),
    new Ingredient('Banana', 5)
  ];
  ingredientAdd = new EventEmitter<Ingredient>();
  constructor() { }

  getIngredientbyIndex(index: number) {
    return this.ingredients[index];
  }
  Update(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChange.next(this.ingredients.slice());
  }
  Delete(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChange.next(this.ingredients.slice());
  }
}
