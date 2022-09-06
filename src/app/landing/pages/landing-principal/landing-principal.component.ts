import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-landing-principal',
  templateUrl: './landing-principal.component.html',
  styleUrls: ['./landing-principal.component.scss']
})
export class LandingPrincipalComponent implements OnInit {
  data1: any;
  data2: any;
  constructor(
    private d:DataService
  ) { 
    this.data1 = this.d.data1;
    this.data2 = this.d.data2;
  }

  ngOnInit(): void {
  }

}
