import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        DropdownDirective
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        DropdownDirective
    ]
})
export class SharedModule { }
