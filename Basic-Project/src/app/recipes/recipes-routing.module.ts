import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { ResipeEditComponent } from './resipe-edit/resipe-edit.component';
import { AuthGuardService } from './../auth/auth-guard.service';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const recipesRoutes: Routes = [
    {
        path: '', component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: ResipeEditComponent, canActivate: [AuthGuardService] },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: ResipeEditComponent, canActivate: [AuthGuardService] },
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(recipesRoutes)],
    exports: [RouterModule],
    providers: [AuthGuardService]
})
export class RecipesRoutingModule {

}
