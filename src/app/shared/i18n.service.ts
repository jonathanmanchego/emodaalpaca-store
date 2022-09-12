import { Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  defaultLanguage!: string;
  supportedLanguages!: string[];

  private langChangeSubscription!: Subscription;

  constructor(private translateService: TranslateService) {}

  init(defaultLanguage: string, supportedLanguages: string[]) {
    this.defaultLanguage = defaultLanguage;
    this.supportedLanguages = supportedLanguages;
    this.language = '';
  }
  destroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
  set language(language: string) {
    language =
      language ||
      this.translateService.getBrowserLang() ||
      this.defaultLanguage;

    let isSupportedLanguage = this.supportedLanguages.some(
      (item) => item === language
    );
    if (!isSupportedLanguage) {
      language = this.defaultLanguage;
    }
    this.translateService.use(language);
  }
  getLanguage(): string {
    return this.translateService.currentLang;
  }
}
