import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingPrincipalComponent } from './pages/landing-principal/landing-principal.component';
import { FooterComponent } from './components/footer/footer.component';
import { GeneralComponent } from './components/general/general.component';
import { WhatsappFloatComponent } from './components/buttons/whatsapp-float/whatsapp-float.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SectionCardsComponent } from './components/section-cards/section-cards.component';
import { PanelProductsComponent } from './components/panel-products/panel-products.component';
import { ShowProductComponent } from './components/show-product/show-product.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryCardsComponent } from './components/category-cards/category-cards.component';
import { ProductsComponent } from './components/products/products.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { CardsProductsComponent } from './components/cards-products/cards-products.component';
import { MaterialModule } from '../material.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    LandingPrincipalComponent,
    FooterComponent,
    GeneralComponent,
    WhatsappFloatComponent,
    NavbarComponent,
    SectionCardsComponent,
    PanelProductsComponent,
    ShowProductComponent,
    CategoryCardsComponent,
    ProductsComponent,
    CardProductComponent,
    CardsProductsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    LandingRoutingModule,
    MaterialModule,
    NgxSpinnerModule
  ]
})
export class LandingModule { }
