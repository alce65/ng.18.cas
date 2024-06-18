import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateArticleDTO } from '../../../core/models/article';

@Component({
  selector: 'cas-add',
  standalone: true,
  imports: [FormsModule],
  template: `
    <details #add>
      <summary>Añadir artículos</summary>
      <div>
        <input type="text" placeholder="Titulo" [(ngModel)]="newArticle.title" />
        <input
          type="text"
          placeholder="Author"
          [(ngModel)]="newArticle.author"
        />
        <button type="button" (click)="handleAdd()">Añadir</button>
      </div>
    </details>
  `,
  styles: ``,
})
export class AddComponent {
  newArticle: CreateArticleDTO = { title: '', author: '' };
  @ViewChild('add', { static: true }) details!: ElementRef<HTMLDetailsElement>;
  @Output() addEvent = new EventEmitter<CreateArticleDTO>();

  handleAdd() {
    if (!this.newArticle.title || !this.newArticle.author) return;
    this.addEvent.next(this.newArticle);
    this.newArticle = { title: '', author: '' };
    this.details.nativeElement.open = false;
  }
}
