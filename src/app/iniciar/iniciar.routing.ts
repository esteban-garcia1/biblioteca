import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IniciarComponent } from './iniciar.component';

const routes: Routes = [
  {
    path: '',
    component: IniciarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IniciarRoutingModule { }