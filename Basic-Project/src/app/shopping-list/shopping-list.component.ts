import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private subscription: Subscription;
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredient();
    this.shoppinglistService.ingredientsChange.subscribe(result => {
      this.ingredients = result;
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
