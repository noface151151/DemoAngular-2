
import { Recipe } from 'app/recipes/recipe-list/recipe.model';
import { Ingredient } from 'app/shared/ingredient.model';
import * as RecipesActions from './recipes.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  recipes: State;
}
export interface State {
  recipes: Recipe[],
  editedRecipe: Recipe;
  editedRecipeIndex: number;
}

const initalState: State = {
  recipes: [
    new Recipe(
      'Recipe 1',
      'Recipe 1 for test',
      'https://upload.wikimedia.org/wikipedia/commons/0/0a/Handi-chicken-Indian-dum-chicken-curry-recipe.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Rice', 1),
      ]
    ),
    new Recipe(
      'Recipe 2',
      'Recipe 2 for test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLrIMNQbX8gJN-VTzocDTKOYdWoPKy2JX0xAj_C7yTP9sHCrek',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Rice', 2),
      ]
    ),

    new Recipe(
      'Recipe 3',
      'Recipe 3 for test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR165nSfx1zJuZgmlexh9tvjfQsBzj_4wfRi3bwxrUDNVJBbq0q',
      [
        new Ingredient('Meat', 3),
        new Ingredient('Rice', 3),
      ]
    )
  ],
  editedRecipe: null,
  editedRecipeIndex: -1
}

export function recipeReducer(state = initalState, action: RecipesActions.RecipesActions) {
  switch (action.type) {
    case RecipesActions.SET_RECIPE:
      return {
        ...state,
        recipes: action.payload
      }
    case RecipesActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      }
    case RecipesActions.UPDATE_RECIPE:
      state.recipes[action.payload.index] = action.payload.newRecipe;
      return {
        ...state,
        recipes: [...state.recipes],
        editedRecipe: null,
        editedRecipeIndex: -1
      }
    case RecipesActions.DELETE_RECIPE:
      state.recipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: [...state.recipes],
        editedRecipe: null,
        editedRecipeIndex: -1
      }
    case RecipesActions.START_EDIT:
      const editedRecipe = state.recipes[action.payload];
      return {
        ...state,
        recipes: [...state.recipes],
        editedRecipe: editedRecipe,
        editedRecipeIndex: action.payload
      }
    case RecipesActions.STOP_EDIT:
      return {
        ...state,
        recipes: [...state.recipes],
        editedRecipe: null,
        editedRecipeIndex: -1
      }
    default:
      return state;
  }
}
