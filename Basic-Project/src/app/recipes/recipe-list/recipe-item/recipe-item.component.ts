import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'app/recipes/recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
    console.log('item');
  }
  onSelected(recipe: Recipe ) {
    this.recipeSelected.emit(recipe);
 //   console.log(this.recipeSelected);
  }
}
