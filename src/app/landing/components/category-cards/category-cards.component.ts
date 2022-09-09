import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-cards',
  templateUrl: './category-cards.component.html',
  styleUrls: ['./category-cards.component.scss']
})
export class CategoryCardsComponent implements OnInit {

  @Input() data: any;
  back = environment.back;

  constructor() { }

  ngOnInit(): void {
  }

}
