import { Component, inject, OnInit } from '@angular/core';
import { AddComponent } from '../add/add.component';
import { CardComponent } from '../card/card.component';
import { CreateTaskDTO, Task } from '../../../core/models/task';
import { MockDataService } from '../../../core/data/tasks';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'cas-list',
  standalone: true,
  imports: [AddComponent, CardComponent],
  template: `
    <h2>Lista en varios componentes</h2>
    <cas-add (addEvent)="handleAdd($event)" />
    <h3>Lista de tareas</h3>
    <ul>
      @for (item of tasks; track item.id) {
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
  tasks: Task[] = [];
  private mock = inject(MockDataService);
  private storageSrv = inject(StorageService);

  ngOnInit(): void {
    this.handleLoad();
  }

  handleLoad() {
    this.tasks = this.storageSrv.get();
    if (this.tasks.length) return;
    this.mock.getTasksAsync().then((tasks) => {
      this.tasks = tasks;
    });
  }

  handleAdd(newTask: CreateTaskDTO) {
    const fullTask: Task = {
      id: crypto.randomUUID(),
      isDone: false,
      ...newTask,
    };
    this.tasks = [...this.tasks, fullTask];
    this.storageSrv.set(this.tasks);
  }

  handleDelete(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.storageSrv.set(this.tasks);
  }

  handleUpdate(updatedTask: Task) {
    this.tasks = this.tasks.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });
    this.storageSrv.set(this.tasks);
  }
}
