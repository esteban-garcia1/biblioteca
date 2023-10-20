import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LibreriaService } from './libreria.service';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { enviroment } from 'src/enviroment/enviroment';


@NgModule({
  declarations: [
    AppComponent,
    
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    provideAuth(()=>getAuth()),
    provideFirebaseApp(() => initializeApp(enviroment.firebase)),
  ],
  providers: [LibreriaService,DataServices,UserService
  ],
  bootstrap: [AppComponent,LibreriaService]
})
export class AppModule { }
