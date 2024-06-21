import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    title: 'Página inicial',
    path: 'home',
    loadComponent: () => import('./features/home/home.component'),
  },
  {
    title: 'Artículos',
    path: 'articles',
    loadComponent: () => import('./features/articles/articles.component') ,
  },
  {
    title: 'Tareas',
    path: 'todo',
    loadComponent: () => import('./features/todo/todo.component') ,
  },
  { path: '**', redirectTo: 'home' },
];
