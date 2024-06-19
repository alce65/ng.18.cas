import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../../../core/models/article';

@Component({
  selector: 'cas-card',
  standalone: true,
  imports: [],
  template: `
    <input type="checkbox" [checked]="item.isPublished" (change)="handleChange()" />
    <span [title]="item.id"> {{ item.title }} - {{ item.author }} </span>
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
  @Input() item!: Article;
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() updateEvent = new EventEmitter<Article>();

  handleChange() {
    this.updateEvent.next({
      ...this.item,
      isPublished: !this.item.isPublished,
    });
  }

  handleDelete() {
    this.deleteEvent.next(this.item.id);
  }
}
