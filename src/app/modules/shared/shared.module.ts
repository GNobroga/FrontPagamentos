import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { StringDelimiterPipe } from './pipes/string-delimiter.pipe';

@NgModule({
  declarations: [
    LoadingComponent,
    StringDelimiterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    StringDelimiterPipe
  ]
})
export class SharedModule { }
