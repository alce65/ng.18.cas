import { Observable, of } from 'rxjs';
import { Task } from '../models/task';

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

export const getTasks = (): Task[] => TASKS;

export const getTasksAsync = async (): Promise<Task[]> => TASKS;

export const getTasksRx = (): Observable<Task[]> => of(TASKS);
