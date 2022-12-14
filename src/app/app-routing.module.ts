import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurd } from './sesion/services/auth.gaurd';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'sesion',
    loadChildren: () =>
      import('./sesion/sesion.module').then((m) => m.SesionModule),
  },
  {
    path: 'admin',
    canActivate: [AuthGaurd],
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      anchorScrolling: 'enabled',
    }),
  ],
  //providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule],
  providers: [{
    provide: LocationStrategy,
    useClass:HashLocationStrategy
  }]
})
export class AppRoutingModule {}
