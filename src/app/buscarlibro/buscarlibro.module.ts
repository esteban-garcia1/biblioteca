import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BuscarLibroRoutingModule } from './buscarlibro.routing';
import { BuscarlibroComponent } from './buscarlibro.component';
import { LibreriaService } from '../libreria.service';


@NgModule({
    declarations: [
        BuscarlibroComponent
    ],
    exports: [
        BuscarlibroComponent
    ],
    providers: [LibreriaService],
    bootstrap: [BuscarlibroComponent],
    imports: [
        FormsModule,
        CommonModule,
        BuscarLibroRoutingModule,
        ReactiveFormsModule
    ]
})
export class BuscarLibroModule { }