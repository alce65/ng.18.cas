/* eslint-disable @typescript-eslint/no-empty-function */
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../models/article';
import { ArticlesApiRepoService } from '../repo/articles.api.repo.service';


type State = {
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
  public state = this._state.asObservable();
  private articlesRepoSrv = inject(ArticlesApiRepoService)

  constructor() {
    this.loadArticles();
  }

  public getActualState(): State {
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



  addArticles() {}
  updateArticles() {}
  deleteArticles() {}


}



