import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingPrincipalComponent } from './pages/landing-principal/landing-principal.component';
import { FooterComponent } from './components/footer/footer.component';
import { GeneralComponent } from './components/general/general.component';
import { WhatsappFloatComponent } from './components/buttons/whatsapp-float/whatsapp-float.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    LandingPrincipalComponent,
    FooterComponent,
    GeneralComponent,
    WhatsappFloatComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
