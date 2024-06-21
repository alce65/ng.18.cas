import { Component, inject, input } from '@angular/core';
import { Task } from '../../../core/models/task';
import { TodoStateService } from '../../../core/services/todo.state.service';

@Component({
  selector: 'cas-card',
  standalone: true,
  imports: [],
  template: `
    <input type="checkbox" [checked]="item()?.isDone" (change)="handleChange()" />
    <span [title]="item()?.id"> {{ item()?.title }} - {{ item()?.owner }} </span>
    <button title="borrar" (click)="handleDelete()">🗑️</button>
  `,
  styles: `
    button {
      cursor: pointer;
      background-color: transparent;
      border: none;
    }
  `,
})
export class CardComponent {
  item  = input<Task>();
  stateSvv = inject(TodoStateService);


  handleChange() {
    this.stateSvv.handleUpdate({
      ...this.item()!,
      isDone: !this.item()!.isDone,
    });
  }

  handleDelete() {
    this.stateSvv.handleDelete(this.item()!.id);
  }
}
