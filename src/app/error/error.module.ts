import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LibreriaService } from '../libreria.service';
import { ErrorComponent } from './error.component';

import { ErrorRoutingModule } from './error.routing';



@NgModule({
    declarations: [
       ErrorComponent
    ],
    exports: [
        ErrorComponent ],
    providers: [LibreriaService],
    bootstrap: [ErrorComponent],
    imports: [
        FormsModule,
        CommonModule,
       ErrorRoutingModule,
        ReactiveFormsModule,
       
    ]
})
export class ErrorModule { }