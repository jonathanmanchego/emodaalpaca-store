import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PrincipalComponent } from './components/principal/principal.component';
import { CardComponent } from './components/card/card.component';
import { ProductosComponent } from './productos/productos.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PanelControlComponent } from './panel-control/panel-control.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CategoriasComponent } from './categorias/categorias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PanelComponent } from './components/panel/panel.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    PrincipalComponent,
    CardComponent,
    ProductosComponent,
    PublicacionesComponent,
    UsuariosComponent,
    PanelControlComponent,
    CategoriasComponent,
    NavComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
