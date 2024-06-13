import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuOptions } from '../../types/menu.options.type';

@Component({
  selector: 'cas-menu',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <ul>
        @for (option of options; track option.path) {
          <li>
            <a [routerLink]="option.path" routerLinkActive="active">{{
              option.title
            }}</a>
          </li>
        }
      </ul>
    </nav>
  `,
  styles: `
    nav {
      background-color: #333;
      color: white;
      ul {
        display: flex;
        list-style: none;
        padding: 0;
      }

      li {
        margin: 0 1rem;
        padding-bottom: 0.5rem;
      }

      a {
        display: block;
        color: white;
        text-decoration: none;
        padding: 1rem;
        padding-bottom: 0.5rem;
      }

      a.active {
        font-weight: bold;
        border-bottom: 2px solid white;
      }
    }
  `,
})
export class MenuComponent {
  @Input() options!: MenuOptions[];
}
