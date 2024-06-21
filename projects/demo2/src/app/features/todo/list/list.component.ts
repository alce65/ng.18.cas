import { Component, inject } from '@angular/core';
import { AddComponent } from '../add/add.component';
import { CardComponent } from '../card/card.component';
import { TodoStateService } from '../../../core/services/todo.state.service';

@Component({
  selector: 'cas-list',
  standalone: true,
  imports: [AddComponent, CardComponent],
  template: `
    <h2>Lista en varios componentes</h2>
    <cas-add />
    <h3>Lista de tareas</h3>
    <ul>
      @for (item of tasks(); track item.id) {
        <li>
          <cas-card [item]="item" />
        </li>
      }
    </ul>
  `,
  styles: `
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      padding: 10px;
      border-bottom: 1px solid #ccc;
    }
  `,
})
export class ListComponent {

  stateSrv = inject(TodoStateService)
  state = this.stateSrv.getState()
  tasks = this.state().tasks 
}
