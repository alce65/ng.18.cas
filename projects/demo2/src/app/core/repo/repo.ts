import { Observable } from "rxjs";

export type Repo<T, C, U> = {
  get(): T[]
  getById(id: string): T
  create(data: C): T
  update(id: string, data: U): T
  delete(id: string): void
}


export type RepoRx<T, C, U> = {
  get(): Observable<T[]>
  getById(id: string): Observable<T>
  create(data: C): Observable<T>
  update(id: string, data: U): Observable<T>
  delete(id: string): Observable<void>
}

// export interface ArticleRepo extends Repo<Article, CreateArticleDTO> {}
