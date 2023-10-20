import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IniciarComponent } from './iniciar.component';
import { IniciarRoutingModule } from './iniciar.routing';
import { UserService } from '../user.service';


@NgModule({
    declarations: [
      IniciarComponent
    ],
    exports: [
      IniciarComponent
    ],
    providers: [UserService],
    bootstrap: [  IniciarComponent],
    imports: [
        FormsModule,
        CommonModule,
     IniciarRoutingModule,
        ReactiveFormsModule
    ]
})
export class IniciarModule { }