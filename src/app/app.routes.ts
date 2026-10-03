import { Routes } from '@angular/router';
import { Shell } from './presentation/layout/shell';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./presentation/pages/login').then(m => m.LoginPage) },
  {
    path: '',
    component: Shell,
    children: [
      { path: '', pathMatch: 'full', loadComponent: () => import('./presentation/pages/home').then(m => m.HomePage) },
      { path: 'productos', data: { tipo: 'cosecha' }, loadComponent: () => import('./presentation/pages/catalog').then(m => m.CatalogPage) },
      { path: 'insumos', data: { tipo: 'insumo' }, loadComponent: () => import('./presentation/pages/catalog').then(m => m.CatalogPage) },
      { path: 'detalle/:id', loadComponent: () => import('./presentation/pages/detail').then(m => m.DetailPage) },
      { path: 'publicar', loadComponent: () => import('./presentation/pages/publish').then(m => m.PublishPage) },
      { path: 'asesoria', loadComponent: () => import('./presentation/pages/advisory').then(m => m.AdvisoryPage) },
      { path: 'pedidos', loadComponent: () => import('./presentation/pages/orders').then(m => m.OrdersPage) },
      { path: 'perfil', loadComponent: () => import('./presentation/pages/profile').then(m => m.ProfilePage) },
    ],
  },
  { path: '**', redirectTo: '' },
];
