import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardProductComponent } from './components/card-product/card-product.component';
import { GeneralComponent } from './components/general/general.component';
import { PanelProductsComponent } from './components/panel-products/panel-products.component';
import { ProductsComponent } from './components/products/products.component';
import { ShowProductComponent } from './components/show-product/show-product.component';
import { LandingPrincipalComponent } from './pages/landing-principal/landing-principal.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    children: [
      {
        path: '',
        component: LandingPrincipalComponent,
      },
      {
        path: 'products',
        component: PanelProductsComponent,
      },
      {
        path: 'category/:category_id/products',
        component: ProductsComponent,
      },
      {
        path: 'category/:category_id/products/show/:product_id',
        component: CardProductComponent,
      },
      {
        path: 'show-product/:index',
        component: ShowProductComponent,
      },
      {
        path: 'products/show-product/:index',
        component: ShowProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
