import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes,  } from '@angular/router';
import { AuthGaurd } from './auth.guard';


const routes: Routes = [
  {
    path: 'buscar',
    loadChildren: () =>
      import('./buscarlibro/buscarlibro.module').then(
        (m) => m.BuscarLibroModule
      ),
      canActivate: [AuthGaurd]
  },
  {
    path: 'registrar',

    loadChildren: () =>
      import('../app/libros/registrarlibro.module').then(
        (m) => m.RegistrarLibroModule
      ),
    canActivate: [AuthGaurd],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../app/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../app/home/home.module').then((m) => m.HomeModule),
      canActivate: [AuthGaurd],
  },
  {
    path: '',
    loadChildren: () =>
      import('../app/iniciar/iniciar.module').then((m) => m.IniciarModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('../app/error/error.module').then((m) => m.ErrorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }