import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from 'src/app/services/data.service';
import { QueryService } from 'src/app/services/query.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss']
})
export class PublicacionesComponent implements OnInit {

  back = environment.back;
  productos: any = [];
  publicaciones: any = [];
  user: any;
  constructor(
    private spinner: NgxSpinnerService,
    private query: QueryService,
    private data: DataService
  ) { 
  }

  async ngOnInit(): Promise<void> {
    this.spinner.show();
    await this.initData();    
    this.user = this.data.user;
    this.spinner.hide();
  }

  async initData() {
    const res2: any = await this.query.obtenerProductosSinPublicar({});
    this.productos = res2.data;
    const res1: any = await this.query.obtenerPublicaciones({});
    this.publicaciones = res1.data;
  }
  
  async publicar(product:any) {
    this.spinner.show();
    const data = {
      PRODUCTS_id: product.id,
      USERS_id: this.user.id,
      CATEGORY_PRODUCTS_id: product.categoria.id
    }
    const res: any = await this.query.guardarPublicaciones(data);
    await this.initData();
    this.spinner.hide();
  }

  async eliminar(id: number) {
    this.spinner.show();
    const res: any = await this.query.eliminarPublicaciones(id);
    await this.initData();
    this.spinner.hide();
  }

}
