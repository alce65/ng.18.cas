/* eslint-disable @typescript-eslint/no-empty-function */
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article, CreateArticleDTO } from '../models/article';
import { ArticlesApiRepoService } from '../repo/articles.api.repo.service';

export type State = {
  articles: Article[]
}

const initialState: State = {
  articles: []
}


@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _state = new BehaviorSubject<State>(initialState);
  public getState() {return this._state.asObservable()};
  private articlesRepoSrv = inject(ArticlesApiRepoService)

  constructor() {
    this.loadArticles();
  }

  getActualState(): State {
    return this._state.getValue();
  }

  loadArticles() {
    this.articlesRepoSrv.get().subscribe(
      (data) => {
        this._state.next({
          ...this._state.getValue(),
          articles: data })
      }
    )
  }

  addArticles(newArticle: CreateArticleDTO) {
    this.articlesRepoSrv.create(newArticle).subscribe(
      (data) => {
        const articles = [...this._state.getValue().articles, data]
        this._state.next({
        ...this._state.getValue(),
        articles
        })
      }
    )
  }

  updateArticles(updatedArticle: Article) {

    this.articlesRepoSrv.update(updatedArticle.id, updatedArticle).subscribe(
      {
        next: (data) => {
          const prevArticles = this._state.getValue().articles;
          const articles = prevArticles.map((article) => {
            return article.id === updatedArticle.id ? data : article;
          })
          this._state.next({
            ...this._state.getValue(),
            articles
            })
      },
        error: (err) => console.error(err)
      }
    )
  }

  deleteArticles(id: string) {
    this.articlesRepoSrv.delete(id).subscribe(
      {
        next: () => {
          const articles = this._state.getValue().articles.filter((article) => article.id !== id)
          this._state.next({
            ...this._state.getValue(),
            articles
            })
        },
        error: (err) => console.error(err)
      }
    )
  }


}



