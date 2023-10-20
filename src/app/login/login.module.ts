import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LibreriaService } from '../libreria.service';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { UserService } from '../user.service';





@NgModule({
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ],
    providers: [UserService],
    bootstrap: [LoginComponent],
    imports: [
        FormsModule,
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule
    ]
})
export class LoginModule { }