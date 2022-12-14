import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PublicServicesService } from 'src/app/services/public-services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  product: any;
  back = environment.back;
  constructor(
    private activeRoute: ActivatedRoute,
    private publicService: PublicServicesService,
    private spinner: NgxSpinnerService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.spinner.show();
    const product_id = this.activeRoute.snapshot.params['product_id'];
    const res: any = await this.publicService.obtenerProducto(product_id);
    this.product = res.data;
    this.spinner.hide();
  }

}
