import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe } from 'app/recipes/recipe-list/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }
}
