import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { routes } from './app.routes';
import { MenuOptions } from './core/types/menu.options.type';
@Component({
  selector: 'cas-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MenuComponent],
  template: `
    <cas-header [appTitle]="title">
      <cas-menu [options]="options" />
    </cas-header>
    <main>
      <router-outlet />
    </main>
  `,
})
export class AppComponent {
  title = 'Angular 18 Demo1';
  options: MenuOptions[] = routes
    .filter((r) => r.title)
    .map((r) => ({ title: r.title as string, path: r.path as string }));
}
