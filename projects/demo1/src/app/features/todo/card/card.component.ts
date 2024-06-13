import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../core/models/task';

@Component({
  selector: 'cas-card',
  standalone: true,
  imports: [],
  template: `
    <input type="checkbox" [checked]="item.isDone" (change)="handleChange()" />
    <span [title]="item.id"> {{ item.title }} - {{ item.owner }} </span>
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
  @Input() item!: Task;
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() updateEvent = new EventEmitter<Task>();

  handleChange() {
    this.updateEvent.next({
      ...this.item,
      isDone: !this.item.isDone,
    });
  }

  handleDelete() {
    this.deleteEvent.next(this.item.id);
  }
}
