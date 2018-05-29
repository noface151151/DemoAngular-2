import { Observable } from 'rxjs/Observable';
import * as ShoppingListActions from './../../shopping-list/store/shopping-list.actions';
import { Ingredient } from './../../shared/ingredient.model';
import { Store } from '@ngrx/store';
import { RecipeService } from 'app/recipes/recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'app/recipes/recipe-list/recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as fromApp from '../../store/app.reducers';
import * as fromRecipes from '../store/recipes.reducers';
import * as RecipesActions from '../store/recipes.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeState: Observable<fromRecipes.State>;
  id: number;
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>) { }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipeState = this.store.select('recipes');
      // if (recipesState.editedRecipeIndex > -1) {
      //   this.recipe = recipesState.editedRecipe;
      // }
    })
  }
  onAddToShoppingList() {
    this.store.select('recipes').take(1).subscribe((data) => {
      this.store.dispatch(new ShoppingListActions.AddIngredientList(
        data.recipes[this.id].ingredients));
    })

  }
  onEditRecipe() {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }
  onDelete() {
    // this.recipeService.deleteRecipe(this.id);
    this.store.dispatch(new RecipesActions.DeleteRecipe(this.id));
    this.router.navigate(['recipes']);
  }
}
