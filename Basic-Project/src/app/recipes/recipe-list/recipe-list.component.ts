import { Recipe } from './recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Recipe 1',
      'Recipe 1 for test',
      'https://upload.wikimedia.org/wikipedia/commons/0/0a/Handi-chicken-Indian-dum-chicken-curry-recipe.jpg'),
    new Recipe('Recipe 2',
      'Recipe 2 for test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLrIMNQbX8gJN-VTzocDTKOYdWoPKy2JX0xAj_C7yTP9sHCrek'),
    new Recipe('Recipe 3',
      'Recipe 3 for test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR165nSfx1zJuZgmlexh9tvjfQsBzj_4wfRi3bwxrUDNVJBbq0q')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
    console.log('list');
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
 //   console.log(this.recipeWasSelected);
  }

}
