import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'app/recipes/recipe-list/recipe.model';
import { RecipeService } from 'app/recipes/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe) {
   // console.log(recipe);
    this.recipeService.selectedRecipe.emit(recipe)
  }
}
