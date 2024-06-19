/* eslint-disable @typescript-eslint/no-unused-vars */
import { inject, Injectable } from '@angular/core';
import { RepoRx } from './articles.repo';
import { Article, CreateArticleDTO, UpdateArticleDTO } from '../models/article';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesApiRepoService implements RepoRx<Article, CreateArticleDTO, UpdateArticleDTO> {
  private url = environment.urlAPI
  private http = inject(HttpClient)

  // Forma de versiones anteriores
  // constructor(private http: HttpClient) {}

  get(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url).pipe(
      map((data) => data.map((article) => ({...article,
        author: article.author.toUpperCase()}))
    ))
  }
  getById(id: string): Observable<Article> {
    return this.http.get<Article>(`${this.url}/${id}`)
  }
  create(data: CreateArticleDTO): Observable<Article> {
    return this.http.post<Article>(this.url, data)
  }
  update(id: string, data: UpdateArticleDTO): Observable<Article> {
    return this.http.patch<Article>(`${this.url}/${id}`, data)
  }
  delete(id: string): Observable<void> {
   return this.http.delete<void>(`${this.url}/${id}`)
  }
}
