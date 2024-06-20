
import { Component } from '@angular/core';
import { FullListComponent } from './full.list/full.list.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'cas-todo',
  standalone: true,
  imports: [FullListComponent, ListComponent],
  template: `
    <h2>Tareas</h2>
    <div>
      <button type="button" [disabled]="isFullList" (click)="isFullList = true">
        FullList
      </button>
      <button
        type="button"
        [disabled]="!isFullList"
        (click)="isFullList = false"
      >
        List
      </button>
    </div>
    @if (isFullList) {
      <cas-full-list />
    } @else {
      <cas-list />
    }
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
