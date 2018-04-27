import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from 'app/recipes/recipe-list/recipe.model';
import { Ingredient } from 'app/shared/ingredient.model';

@Injectable()
export class RecipeService {

  selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Recipe 1',
      'Recipe 1 for test',
      'https://upload.wikimedia.org/wikipedia/commons/0/0a/Handi-chicken-Indian-dum-chicken-curry-recipe.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Rice', 1),
      ]
    ),
    new Recipe('Recipe 2',
      'Recipe 2 for test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLrIMNQbX8gJN-VTzocDTKOYdWoPKy2JX0xAj_C7yTP9sHCrek',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Rice', 2),
      ]
    ),

    new Recipe('Recipe 3',
      'Recipe 3 for test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR165nSfx1zJuZgmlexh9tvjfQsBzj_4wfRi3bwxrUDNVJBbq0q',
      [
        new Ingredient('Meat', 3),
        new Ingredient('Rice', 3),
      ]
    )
  ];
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
