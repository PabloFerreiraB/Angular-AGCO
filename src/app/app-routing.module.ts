import { CreateProductComponent } from './components/products/create-product/create-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MediaComponent } from './components/media/media.component';
import { PagesComponent } from './components/pages/pages.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'product',
    children: [
      {
        path: 'create',
        loadComponent: () =>
          import(
            './components/products/create-product/create-product.component'
          ).then((m) => m.CreateProductComponent),
      },
    ],
  },

  {
    path: 'statistics',
    component: StatisticsComponent,
  },
  {
    path: 'pages',
    component: PagesComponent,
  },
  {
    path: 'media',
    component: MediaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
