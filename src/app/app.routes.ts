import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'fintech',
    loadChildren: () => import('./modules/fintech/fintech.module'),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'fintech',
  }
];
