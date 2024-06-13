import { Component } from '@angular/core';
import { FullListComponent } from './full.list/full.list.component';

@Component({
  selector: 'cas-todo',
  standalone: true,
  imports: [FullListComponent],
  template: `
    <p>
      todo works!
      <cas-full-list />
    </p>
  `,
  styles: ``,
})
export default class TodoComponent {}
