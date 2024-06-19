import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from 'cas.lib';
import { MenuComponent } from 'cas.lib';
import { routes } from './app.routes';
import { MenuOptions } from 'cas.lib';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'cas-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MenuComponent, DatePipe],
  template: `
    <cas-header [appTitle]="title">
      <cas-menu [options]="options" />
    </cas-header>
    <main>
      <router-outlet />
    </main>
    <footer>
      <p>{{ toDay | date: 'fullDate' }}</p>
    </footer>
  `,
})
export class AppComponent {
  title = 'Angular 18 Demo2'
  options: MenuOptions[] = routes
    .filter((r) => r.title)
    .map((r) => ({ title: r.title as string, path: r.path as string }));
  toDay = new Date();
}
