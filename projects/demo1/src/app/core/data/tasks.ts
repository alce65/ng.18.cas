import { Observable, of } from 'rxjs';
import { Task } from '../models/task';
import { Injectable } from '@angular/core';

const TASKS: Task[] = [
  {
    id: crypto.randomUUID(),
    title: 'Task 1',
    owner: 'Pepe',
    isDone: true,
  },
  {
    id: crypto.randomUUID(),
    title: 'Task 2',
    owner: 'Luisa',
    isDone: true,
  },
  {
    id: crypto.randomUUID(),
    title: 'Task 3',
    owner: 'Ernestina',
    isDone: false,
  },
];

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  getTasks (): Task[] {return TASKS;}

  async getTasksAsync(): Promise<Task[]> {return TASKS;}

  getTasksRx(): Observable<Task[]> {return of(TASKS);}

}
