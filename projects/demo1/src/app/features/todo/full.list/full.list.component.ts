import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CreateTaskDTO, Task } from '../../../core/models/task';
import { getTasksAsync } from '../../../core/data/tasks';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cas-full-list',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Lista en un único componente</h2>
    <details #add>
      <summary>Añadir tareas</summary>
      <div>
        <input type="text" placeholder="Titulo" [(ngModel)]="newTask.title" />
        <input
          type="text"
          placeholder="Responsable"
          [(ngModel)]="newTask.owner"
        />
        <button type="button" (click)="handleAdd()">Añadir</button>
      </div>
    </details>
    <h3>Lista de tareas</h3>
    <ul>
      @for (item of tasks; track item.id) {
        <li>
          <input
            type="checkbox"
            [checked]="item.isDone"
            (change)="handleChange(item.id)"
          />
          <span [title]="item.id"> {{ item.title }} - {{ item.owner }} </span>
          <button title="borrar" (click)="handleDelete(item.id)">🗑️</button>
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
    button[title='borrar'] {
      cursor: pointer;
      background-color: transparent;
      border: none;
    }
  `,
})
export class FullListComponent implements OnInit {
  tasks: Task[] = [];
  newTask: CreateTaskDTO = { title: '', owner: '' };
  @ViewChild('add', { static: true }) details!: ElementRef<HTMLDetailsElement>;

  constructor() {
    console.log(this.details);
  }

  ngOnInit(): void {
    this.handleLoad();
    console.log(this.details);
  }

  handleLoad() {
    getTasksAsync().then((tasks) => {
      this.tasks = tasks;
    });
  }

  handleAdd() {
    if (!this.newTask.title || !this.newTask.owner) return;
    const fullTask: Task = {
      id: crypto.randomUUID(),
      isDone: false,
      ...this.newTask,
    };

    // No es recomendable mutar el array
    // this.tasks.push(fullTask);
    this.tasks = [...this.tasks, fullTask];
    this.newTask = { title: '', owner: '' };
    this.details.nativeElement.open = false;
  }

  handleDelete(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  handleChange(id: string) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });
  }
}
