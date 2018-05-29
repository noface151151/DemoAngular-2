import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Recipe } from 'app/recipes/recipe-list/recipe.model';
import { RecipeService } from './../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import * as fromRecipes from '../store/recipes.reducers';
import * as Recipesactions from '../store/recipes.actions';

@Component({
  selector: 'app-resipe-edit',
  templateUrl: './resipe-edit.component.html',
  styleUrls: ['./resipe-edit.component.css']
})
export class ResipeEditComponent implements OnInit, OnDestroy {


  id: number;
  EditMod = false;
  recipeForm: FormGroup;
  subcription: Subscription;
  constructor(private route: ActivatedRoute, private recipesService: RecipeService,
    private router: Router,
    private store: Store<fromRecipes.FeatureState>) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.EditMod = params['id'] != null;
      this.initForm();
    })
  }

  onSubmit() {
    if (this.EditMod) {
      this.store.dispatch(new Recipesactions.UpdateRecipe({ index: this.id, newRecipe: this.recipeForm.value }));
    } else {
     // this.recipesService.addRecipe(this.recipeForm.value);
      this.store.dispatch(new Recipesactions.AddRecipe(this.recipeForm.value));
    }
    this.onCancle();
  }
  onCancle() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }
  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngredients = new FormArray([]);
    if (this.EditMod) {
      this.store.select('recipes').take(1).subscribe((data: fromRecipes.State) => {
        const recipe = data.recipes[this.id];
        recipeName = recipe.name;
        recipeImagePath = recipe.imagePath;
        recipeDescription = recipe.description;
        if (recipe['ingredients']) {
          for (const ingredient of recipe.ingredients) {
            recipeIngredients.push(new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
            )
          }
        }
      })
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }
  ngOnDestroy(): void {
    // this.subcription.unsubscribe();
    // this.store.dispatch(new Recipesactions.StopEdit);
  }
}
