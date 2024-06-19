import { Component, inject, OnInit } from '@angular/core';
import { AddComponent } from '../add/add.component';
import { CardComponent } from '../card/card.component';
import { CreateArticleDTO, Article } from '../../../core/models/article';
import { ArticlesApiRepoService } from '../../../core/repo/articles.api.repo.service';

@Component({
  selector: 'cas-list',
  standalone: true,
  imports: [AddComponent, CardComponent],
  template: `
    <cas-add (addEvent)="handleAdd($event)" />
    <h3>Lista de artículos</h3>
    @if (hasError) {
      <p>Error al cargar los artículos</p>
    }
    <ul>
      @for (item of articles; track item.id) {
        <li>
          <cas-card
            [item]="item"
            (deleteEvent)="handleDelete($event)"
            (updateEvent)="handleUpdate($event)"
          />
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
export class ListComponent implements OnInit {
  articles: Article[] = [];
  private repoSrv = inject(ArticlesApiRepoService)
  // version previa con repo inMemory
  // private repoSrv = inject(ArticlesMemoryRepoService)
  hasError = false;

  ngOnInit(): void {
    this.handleLoad();
  }

  handleLoad() {
    this.repoSrv.get().subscribe(
      (data) => this.articles = data
    )
  }

  handleAdd(newArticle: CreateArticleDTO) {
    this.repoSrv.create(newArticle).subscribe(
      (data) => this.articles = [...this.articles, data]
    )
  }

  handleDelete(id: string) {
    this.repoSrv.delete(id).subscribe(
      {
        next: () => this.articles = this.articles.filter((article) => article.id !== id),
        error: (err) => console.error(err)
      }

    )
  }

  handleUpdate(updatedArticle: Article) {
    this.repoSrv.update(updatedArticle.id, updatedArticle).subscribe(
      {
        next: (data) => this.articles = this.articles.map((article) => {
          return article.id === updatedArticle.id ? data : article;
        }),
        error: (err) => console.error(err)
      }
    )
  }
}
