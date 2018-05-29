import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';
import * as fromRecipes from '../store/recipes.reducers';
import * as RecipesAction from '../store/recipes.actions';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipes: Recipe[] = [];
  subscription: Subscription;
  recipesState: Observable<fromRecipes.State>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromRecipes.FeatureState>) { }

  ngOnInit() {
    // this.recipes = this.recipeService.getRecipes();
    // this.subscription = this.recipeService.recipeChange.subscribe(
    //   (recipeArray: Recipe[]) => {
    //     this.recipes = recipeArray;
    //   }
    // )
    this.recipesState = this.store.select('recipes');
  }
  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
  onAddNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
