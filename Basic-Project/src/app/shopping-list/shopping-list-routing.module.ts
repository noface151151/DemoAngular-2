import { ShoppingListComponent } from './shopping-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const shoppinglistRoutes: Routes = [

    { path: 'shopping-list', component: ShoppingListComponent },

]
@NgModule({
    imports: [RouterModule.forChild(shoppinglistRoutes)],
    exports: [RouterModule]
})
export class ShoppinglistRoutingModule {

}
