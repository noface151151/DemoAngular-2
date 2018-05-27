import * as ShoppingListActions from './../store/shopping-list.actions';
import * as fromShoppingList from './../store/shopping-list.reducers';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  indexEdit: number;
  editmod = false;
  IngredientEdit: Ingredient;
  constructor( private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.store.select('shoppingList')
      .subscribe(
        (data) => {
          if (data.editedIngredientIndex > -1) {
            this.editmod = true;
            this.IngredientEdit = data.editedIngredient;
            this.indexEdit = data.editedIngredientIndex;
            this.slForm.setValue({
              name: this.IngredientEdit.name,
              amount: this.IngredientEdit.amount
            })
          } else {
            this.editmod = false;
          }
        }
      )
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const IngredientData = new Ingredient(value.name, value.amount);
    if (this.editmod) {
      // this.shoppingListService.Update(this.indexEdit, IngredientData);
      this.store.dispatch(new ShoppingListActions.UpdateIngredient( IngredientData ));
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(IngredientData))
    }
    this.editmod = false;
    form.reset();
  }
  onClear() {
    this.slForm.reset();
    this.editmod = false;
  }
  onDelete() {
    // this.shoppingListService.Delete(this.indexEdit);
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.slForm.reset();
    this.editmod = false;
  }
}
