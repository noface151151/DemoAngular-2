import { Recipe } from './../recipe-list/recipe.model';
import { Action } from '@ngrx/store';

export const SET_RECIPE = 'SET_RECIPES';
export const ADD_RECIPE = 'ADD_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';
export const STORE_RECIPE = 'STORE_RECIPE';
export const FETCH_RECIPE = 'FETCH_RECIPE';

export class SetRecipe implements Action {
  readonly type = SET_RECIPE;
  constructor(public payload: Recipe[]) { }
}

export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;
  constructor(public payload: Recipe) { }
}

export class UpdateRecipe implements Action {
  readonly type = UPDATE_RECIPE;
  constructor(public payload: { index: number, newRecipe: Recipe }) { }
}

export class DeleteRecipe implements Action {
  readonly type = DELETE_RECIPE;
  constructor(public payload: number) { }
}

export class StartEdit implements Action {
  readonly type = START_EDIT;
  constructor(public payload: number) { }
}
export class StopEdit implements Action {
  readonly type = STOP_EDIT;
}

export class StoreRecipe implements Action {
  readonly type = STORE_RECIPE;
}


export class FetchRecipe implements Action {
  readonly type = FETCH_RECIPE;
}


export type RecipesActions =
  SetRecipe |
  AddRecipe |
  UpdateRecipe |
  DeleteRecipe |
  DeleteRecipe |
  StartEdit |
  StopEdit |
  StoreRecipe |
  FetchRecipe;
