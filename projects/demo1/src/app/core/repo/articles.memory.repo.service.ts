import { Injectable } from '@angular/core';
import { RepoRx } from './articles.repo';
import { Article, CreateArticleDTO, UpdateArticleDTO } from '../models/article';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesMemoryRepoService implements RepoRx<Article, CreateArticleDTO, UpdateArticleDTO> {

  private articles: Article[] = [
    { id: '1', title: 'Article 1', author: 'Content 1' , isPublished: true},
    { id: '2', title: 'Article 2', author: 'Content 2', isPublished: false},
    { id: '3', title: 'Article 3', author: 'Content 3', isPublished: true},
  ]
  get(): Observable<Article[]> {
    return of(this.articles)
  }
  getById(id: string): Observable<Article> {
    const article = this.articles.find((article) => article.id === id);
    if (!article) {
      return throwError(() => new Error('Article not found'))
    }
    return of(article);
  }
  create(data: CreateArticleDTO): Observable<Article> {
    const fullArticle: Article = {
      id: crypto.randomUUID(),
      isPublished: false,
      ...data,
    };
    this.articles = [...this.articles, fullArticle];
    return of(fullArticle);
  }
  update(id: string, data: UpdateArticleDTO): Observable<Article> {
    const article = this.articles.find((article) => article.id === id);
    if (!article) {
      return throwError(() => new Error('Article not found'));
    }
    const newArticle = { ...article, ...data };
    this.articles = this.articles.map((article) => {
      return article.id === id ? newArticle : article;
    });
    return of(newArticle);
  }

  delete(id: string): Observable<void> {
    const initialLength = this.articles.length;
    this.articles = this.articles.filter((article) => article.id !== id);
    if (initialLength === this.articles.length) {
      return throwError(() => new Error('Article not found'))
    }
    return of(undefined)
  }
}
