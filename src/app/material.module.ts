import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({

  imports: [MatDividerModule,MatSliderModule,MatSelectModule,MatRadioModule,MatDatepickerModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatAutocompleteModule],
  exports: [MatDividerModule,MatSliderModule,MatSelectModule,MatRadioModule,MatDatepickerModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatAutocompleteModule],  
  
})
export class MaterialModule { }