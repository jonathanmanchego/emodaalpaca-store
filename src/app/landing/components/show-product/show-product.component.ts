import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {

  data :any=null;
  constructor(
    private activeRoute: ActivatedRoute,
    private d: DataService
  ) { 
  }
  
  ngOnInit(): void {
    // const index: any = parseInt(this.activeRoute.snapshot.paramMap.get('index'));
    this.activeRoute.params.subscribe(params => {
      const index: any = params['index'] || null;
      
      this.data = this.d.data[index-1];
      
    });
  }

}
