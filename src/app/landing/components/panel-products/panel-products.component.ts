import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-panel-products',
  templateUrl: './panel-products.component.html',
  styleUrls: ['./panel-products.component.scss']
})
export class PanelProductsComponent implements OnInit {

  data: any;
  constructor(
    private d: DataService
  ) { 
    this.data = this.d.data;
  }

  ngOnInit(): void {
  }

}
