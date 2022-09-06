import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-cards',
  templateUrl: './section-cards.component.html',
  styleUrls: ['./section-cards.component.scss']
})
export class SectionCardsComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
