import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarlibroComponent } from './buscarlibro.component';

const routes: Routes = [
  {
    path: '',
    component: BuscarlibroComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarLibroRoutingModule { }