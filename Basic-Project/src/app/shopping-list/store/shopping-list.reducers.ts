import * as  ShoppingListActions from './shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';

export interface AppState {
    shoppingList: State;
}

export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}

const initalState: State = {
    ingredients: [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 5),
        new Ingredient('Banana', 5)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
}
export function shoppingListReducer(state = initalState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            }
        case ShoppingListActions.UPDATE_INGREDIENT:
            state.ingredients[state.editedIngredientIndex] = action.payload;
            // const ingredient = state.ingredients[action.payload.index];
            // const ingredientUpdate = { ...ingredient, ...action.payload.ingredientUpdate };
            // const ingredients = state.ingredients;
            // ingredients[action.payload.index] = ingredientUpdate
            return {
                ...state,
                //   ingredients:ingredients,
                ingredients: [...state.ingredients]
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            state.ingredients.splice(1, state.editedIngredientIndex);
            return {
                ...state,
                ingredients: [...state.ingredients]
            }
        case ShoppingListActions.START_EDIT:
            const editedIngredient = state.ingredients[action.payload];
            return {
                ...state,
                editedIngredient: editedIngredient,
                editedIngredientIndex: action.payload
            }
        default:
            return state;
    }
}
