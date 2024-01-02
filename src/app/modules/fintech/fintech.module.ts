import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FintechRoutingModule } from './fintech-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TitleComponent } from './components/title/title.component';
import { DateRangeComponent } from './components/date-range/date-range.component';
import { MonthsComponent } from './components/months/months.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidenavComponent,
    TitleComponent,
    DateRangeComponent,
    MonthsComponent
  ],
  imports: [
    CommonModule,
    FintechRoutingModule
  ]
})
export default class FintechModule { }
