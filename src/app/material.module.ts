import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatChipsModule } from "@angular/material/chips";

//import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatRippleModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule,
    // FlexLayoutModule,
    MatDividerModule,
    MatBadgeModule,

    MatChipsModule,
    //NgxMaterialTimepickerModule,
    MatBottomSheetModule,
    MatExpansionModule,
  ],
  
})
export class MaterialModule { }
