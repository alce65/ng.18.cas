import { Routes } from '@angular/router';
import { StorageService } from './features/todo/services/storage.service';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    title: 'Página inicial',
    path: 'home',
    loadComponent: () => import('./features/home/home.component'),
  },
  {
    title: 'Tareas',
    path: 'todo',
    providers: [StorageService],
    loadComponent: () => import('./features/todo/todo.component'),
  },
  {
    title: 'Artículos',
    path: 'articles',
    loadComponent: () => import('./features/articles/articles.component') ,
  },
  {
    title: 'Nosotros',
    path: 'about',
    loadComponent: () => import('./features/about/about.component'),
  },
  { path: '**', redirectTo: 'home' },
];
