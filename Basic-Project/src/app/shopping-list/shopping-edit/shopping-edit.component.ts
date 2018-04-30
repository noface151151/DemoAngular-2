import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  indexEdit: number;
  editmod = false;
  IngredientEdit: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startEditting.subscribe((index: number) => {
      this.indexEdit = index;
      this.editmod = true;
      this.IngredientEdit = this.shoppingListService.getIngredientbyIndex(index);
      this.slForm.setValue({
        name: this.IngredientEdit.name,
        amount: this.IngredientEdit.amount
      })
    })
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const IngredientData = new Ingredient(value.name, value.amount);
    if (this.editmod) {
      this.shoppingListService.Update(this.indexEdit, IngredientData);
    } else {
      this.shoppingListService.addIngredient(IngredientData);
    }
    this.editmod = false;
    form.reset();
  }
  onClear() {
    this.slForm.reset();
    this.editmod = false;
  }
  onDelete() {
    this.shoppingListService.Delete(this.indexEdit);
    this.slForm.reset();
    this.editmod = false;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
