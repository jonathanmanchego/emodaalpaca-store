import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductosComponent } from './productos/productos.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'productos',
        component: ProductosComponent,
      },
      {
        path: 'publicaciones',
        component: PublicacionesComponent,
      },
      {
        path: 'usuarios',
        component: UsuariosComponent,
      },
      {
        path: 'categorias',
        component: CategoriasComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
