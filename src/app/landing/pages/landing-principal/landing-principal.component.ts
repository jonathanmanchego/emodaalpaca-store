import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PublicServicesService } from 'src/app/services/public-services.service';

@Component({
  selector: 'app-landing-principal',
  templateUrl: './landing-principal.component.html',
  styleUrls: ['./landing-principal.component.scss']
})
export class LandingPrincipalComponent implements OnInit {
  data1: any;
  data2: any;
  categorias: any = [];
  constructor(
    private d: DataService,
    private publicService:PublicServicesService
  ) { 
    this.data1 = this.d.data1;
    this.data2 = this.d.data2;
  }

  async ngOnInit(): Promise<void> {
    await this.getCategories();
  }


  async getCategories() {
    const res: any = await this.publicService.obtenerCategorias({});
    this.categorias = res.data;
  }

}
