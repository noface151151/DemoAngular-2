import { Subscription } from 'rxjs/Subscription';

import { Recipe } from './recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from 'app/recipes/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {


  recipes: Recipe[] = [];
  subscription: Subscription;
  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipeChange.subscribe(
      (recipeArray: Recipe[]) => {
        this.recipes = recipeArray;
      }
    )
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onAddNewRecipe() {
    console.log('1');
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
