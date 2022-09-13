import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PublicServicesService } from 'src/app/services/public-services.service';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  id: number = 0;
  data: any;
  publicaciones: any = [];
  products: any = [];
  categoria: any=null;
  categorias: any = [];
  constructor(
    private spinner: NgxSpinnerService,
    private d: DataService,
    private activeRoute: ActivatedRoute,
    private publicService: PublicServicesService,
    private route:Router
  ) { 
    this.data = this.d.data;
  }

  async ngOnInit(): Promise<void>{
    this.spinner.show();
    this.id = this.activeRoute.snapshot.params['category_id'];
    console.log('id=>',this.id);
    await this.getPublicaciones(this.id);
    await this.getCategories();
    this.spinner.hide();
  }

  async getPublicaciones(category_id:number) {
    const res: any = await this.publicService.obtenerPulicaciones(category_id);
    console.log(res);
    this.publicaciones = res.data;
    this.categoria = this.publicaciones[0].categoria;
    for (let i = 0; i < this.publicaciones.length; i++){
      this.products[i] = this.publicaciones[i].producto;
    }
    console.log('Products',this.products);
  }

  async getCategories() {
    const res: any = await this.publicService.obtenerCategorias({});
    this.categorias = res.data;
  }

  async changeCategory(category_id: number) {
    this.spinner.show();
    this.route.navigateByUrl(`category/${category_id}/products`);
    await this.getPublicaciones(category_id);
    this.spinner.hide();
  }

}
