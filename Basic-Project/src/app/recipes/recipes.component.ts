import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe } from 'app/recipes/recipe-list/recipe.model';
import { RecipeService } from 'app/recipes/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  //  this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => this.selectedRecipe = recipe)
  }
}
