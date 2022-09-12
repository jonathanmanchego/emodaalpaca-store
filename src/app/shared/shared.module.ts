import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [LanguageSelectorComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CommonModule, TranslateModule, LanguageSelectorComponent],
})
export class SharedModule {}
