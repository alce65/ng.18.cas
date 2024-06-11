import { Routes } from '@angular/router';

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
    loadComponent: () => import('./features/todo/todo.component'),
  },
  {
    title: 'Nosotros',
    path: 'about',
    loadComponent: () => import('./features/about/about.component'),
  },
  { path: '**', redirectTo: 'home' },
];
