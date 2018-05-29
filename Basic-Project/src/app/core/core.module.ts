import { AuthInterceptor } from './../shared/auth.interceptor';
import { DataStorageService } from './../shared/data-storage.service';
import { RecipeService } from 'app/recipes/recipe.service';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        RecipeService,
        DataStorageService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ]

})
export class CoreModule { }
