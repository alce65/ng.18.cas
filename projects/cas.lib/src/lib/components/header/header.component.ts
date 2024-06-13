import { Component, Input } from '@angular/core';

@Component({
  selector: 'cas-header',
  standalone: true,
  imports: [],
  template: `
    <header>
      <h1>{{ appTitle }}</h1>
      <ng-content></ng-content>
    </header>
  `,
  styles: `
    header {
      display: flex;
      justify-content: space-between;
      background-color: #333;
      color: white;
      padding: 1rem;
    }
  `,
})
export class HeaderComponent {
  @Input() appTitle!: string;
}
