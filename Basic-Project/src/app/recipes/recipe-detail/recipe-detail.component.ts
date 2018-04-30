import { RecipeService } from 'app/recipes/recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'app/recipes/recipe-list/recipe.model';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private shoppinglistService: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipeById(this.id);
    })
  }
  onAddToShoppingList() {
    // this.shoppinglistService.addIngredientList(this.recipe.ingredients);
  }
  onEditRecipe() {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }
  onDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['recipes']);
  }
}
