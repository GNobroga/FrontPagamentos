import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FintechRoutingModule } from './fintech-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TitleComponent } from './components/title/title.component';
import { DateRangeComponent } from './components/date-range/date-range.component';
import { MonthsComponent } from './components/months/months.component';
import { ResumoComponent } from './pages/resumo/resumo.component';
import { VendasComponent } from './pages/vendas/vendas.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidenavComponent,
    TitleComponent,
    DateRangeComponent,
    MonthsComponent,
    ResumoComponent,
    VendasComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FintechRoutingModule
  ]
})
export default class FintechModule { }
