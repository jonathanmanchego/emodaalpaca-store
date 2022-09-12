import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { I18nService } from '../i18n.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {
  @Input() menuClass = '';

  constructor(
    private i18nService: I18nService,
    private readonly router: Router
  ) {}

  setLanguage(language: any) {
    this.i18nService.language = language;
  }

  get currentLanguage(): any {
    return this.i18nService.getLanguage();
  }

  get languages(): any[] {
    return this.i18nService.supportedLanguages;
  }
}
