import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cards-products',
  templateUrl: './cards-products.component.html',
  styleUrls: ['./cards-products.component.scss']
})
export class CardsProductsComponent implements OnInit {

  back = environment.back;
  @Input() data: any;
  constructor(
    private d: DataService
  ) { 
    // this.data = this.d.data;
  }

  ngOnInit(): void {
    console.log('data',this.data);
    
  }

}
