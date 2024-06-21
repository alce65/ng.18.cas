import { computed, inject, Injectable, signal } from '@angular/core';
import { CreateTaskDTO, Task } from '../models/task';
import { TasksApiRepoService } from '../repo/tasks..repo.service';

const initialState = {
  tasks: signal<Task[]>([])
}

export type TodoState = typeof initialState

@Injectable({
  providedIn: 'root'
})
export class TodoStateService {
  private _repoSrv = inject(TasksApiRepoService);
  private _state = initialState;
  public getState() { return computed(()=> this._state) };
  public getPendingTasksNumber = computed(() => this._state.tasks().filter((task) => !task.isDone).length);

  constructor() {
    this.handleLoad();
  }

  handleLoad() {
    this._repoSrv.get().subscribe((tasks) =>
      this._state.tasks.set(tasks)
    );
  }


  handleAdd(newTask: CreateTaskDTO) {
    this._repoSrv.create(newTask).subscribe((task) =>
      this._state.tasks.update((tasks) => [...tasks, task])
    );
  }
  handleDelete(id: string) {
    this._state.tasks.update((tasks) => tasks.filter((task) =>
       task.id !== id));
  }

  handleUpdate(updatedTask: Task) {
    this._state.tasks.update((tasks) => tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task));
  }

}
