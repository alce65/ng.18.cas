/* eslint-disable @typescript-eslint/no-unused-vars */
import { inject, Injectable } from '@angular/core';
import { RepoRx } from './repo';
import { Task, CreateTaskDTO, UpdateTaskDTO } from '../models/task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksApiRepoService implements RepoRx<Task, CreateTaskDTO, UpdateTaskDTO> {
  private url = "http://localhost:3001/tasks"
  private http = inject(HttpClient)

  // Forma de versiones anteriores
  // constructor(private http: HttpClient) {}

  get(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url)
  }

  getById(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.url}/${id}`)
  }

  create(data: CreateTaskDTO): Observable<Task> {
    return this.http.post<Task>(this.url,
      {...data, isDone: false})
  }

  update(id: string, data: UpdateTaskDTO): Observable<Task> {
    return this.http.patch<Task>(`${this.url}/${id}`, data)
  }

  delete(id: string): Observable<void> {
   return this.http.delete<void>(`${this.url}/${id}`)
  }
}
