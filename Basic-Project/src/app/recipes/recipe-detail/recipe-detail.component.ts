import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'app/recipes/recipe-list/recipe.model';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddToShoppingList() {
    this.shoppinglistService.addIngredientList(this.recipe.ingredients);
  }
}
