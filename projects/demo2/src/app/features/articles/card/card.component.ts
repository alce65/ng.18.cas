import { Component, inject, Input } from '@angular/core';
import { Article } from '../../../core/models/article';
import { StateService } from '../../../core/services/state.service';

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
  private stateSrv = inject(StateService)


  handleChange() {
    this.stateSrv.updateArticles({
      ...this.item,
      isPublished: !this.item.isPublished,
    });
  }

  handleDelete() {
    this.stateSrv.deleteArticles(this.item.id)
  }
}
