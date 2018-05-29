import { RecipesEffects } from './store/recipes.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { ResipeEditComponent } from './resipe-edit/resipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { NgModule } from '@angular/core';
import { recipeReducer } from 'app/recipes/store/recipes.reducers';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ResipeEditComponent,
    RecipeItemComponent
  ],
  imports: [
    RecipesRoutingModule,
    SharedModule,
    CommonModule,
    StoreModule.forFeature('recipes', recipeReducer),
    EffectsModule.forFeature([RecipesEffects])

  ]

})
export class RecipeModule {

}
