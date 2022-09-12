import { I18nService } from './shared/i18n.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'emoda-store';
  constructor(private readonly i18nService: I18nService) {}

  ngOnInit(): void {
    this.i18nService.init('es', ['es', 'en']);
  }
}
