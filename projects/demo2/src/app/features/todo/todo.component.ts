import { Component } from '@angular/core';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'cas-todo',
  standalone: true,
  imports: [ ListComponent],
  template: `
    <h2>Tareas</h2>
    <cas-list />
  `,
  styles: `
    :disabled {
      cursor: not-allowed;
    }
  `,
})
export default class TodoComponent {
  isFullList = true;
}
