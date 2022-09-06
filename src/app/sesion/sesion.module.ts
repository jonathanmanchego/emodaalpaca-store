import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SesionRoutingModule } from './sesion-routing.module';
import { SesionComponent } from './sesion/sesion.component';

@NgModule({
  declarations: [
    SesionComponent
  ],
  imports: [
    CommonModule,
    SesionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SesionModule { }
