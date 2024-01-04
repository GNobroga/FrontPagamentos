import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { FintechRoutingModule } from './fintech-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TitleComponent } from './components/title/title.component';
import { DateRangeComponent } from './components/date-range/date-range.component';
import { MonthsComponent } from './components/months/months.component';
import { ResumoComponent } from './pages/resumo/resumo.component';
import { VendasComponent } from './pages/vendas/vendas.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { VendaComponent } from './pages/venda/venda.component';
import { StatusComponent } from './components/status/status.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    SidenavComponent,
    TitleComponent,
    DateRangeComponent,
    MonthsComponent,
    ResumoComponent,
    VendasComponent,
    NotFoundComponent,
    VendaComponent,
    StatusComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    FintechRoutingModule,
    NgxEchartsModule.forRoot({ echarts }),
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export default class FintechModule { }
