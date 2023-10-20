import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegistrarLibroRoutingModule } from './registrarlibro.routing';
import { LibrosComponent } from './libros.component';
import { UserService } from '../user.service';


@NgModule({
    declarations: [
       LibrosComponent
    ],
    exports: [
       LibrosComponent
    ],
    providers: [UserService],
    bootstrap: [LibrosComponent],
    imports: [
        FormsModule,
        CommonModule,
        RegistrarLibroRoutingModule,
        ReactiveFormsModule
    ]
})
export class RegistrarLibroModule { }