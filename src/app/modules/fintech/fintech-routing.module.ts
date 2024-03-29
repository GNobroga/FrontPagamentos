import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VendasComponent } from './pages/vendas/vendas.component';
import { ResumoComponent } from './pages/resumo/resumo.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { VendaComponent } from './pages/venda/venda.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'resumo',
        component: ResumoComponent,
        title: 'Fintech | Resumo',
      },
      {
        path: 'vendas',
        component: VendasComponent,
        title: 'Fintech | Vendas',
      },
      {
        path: 'vendas/:id',
        component: VendaComponent,
        title: 'Fintech | Venda',
      }
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FintechRoutingModule { }
