import { Component, OnInit } from '@angular/core';
import { AddComponent } from '../add/add.component';
import { CardComponent } from '../card/card.component';
import { CreateTaskDTO, Task } from '../../../core/models/task';

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


  ngOnInit(): void {
    this.handleLoad();
  }

  handleLoad() {
    //
  }

  handleAdd(newTask: CreateTaskDTO) {
    console.log(newTask)
  }

  handleDelete(id: string) {
    console.log(id)
  }

  handleUpdate(updatedTask: Task) {
    console.log(updatedTask)
  }
}
