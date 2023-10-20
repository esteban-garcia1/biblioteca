import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LibreriaService } from '../libreria.service';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { UserService } from '../user.service';




@NgModule({
    declarations: [
       HomeComponent
    ],
    exports: [
        HomeComponent ],
    providers: [LibreriaService,UserService,],
    bootstrap: [HomeComponent],
    imports: [
        FormsModule,
        CommonModule,
        HomeRoutingModule,
        ReactiveFormsModule,
       
    ]
})
export class HomeModule { }