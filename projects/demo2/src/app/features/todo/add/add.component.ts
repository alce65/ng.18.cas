import {
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateTaskDTO } from '../../../core/models/task';
import { TodoStateService } from '../../../core/services/todo.state.service';


@Component({
  selector: 'cas-add',
  standalone: true,
  imports: [FormsModule],
  template: `
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
  `,
  styles: ``,
})
export class AddComponent {
  newTask: CreateTaskDTO = { title: '', owner: '' };
  @ViewChild('add', { static: true }) details!: ElementRef<HTMLDetailsElement>;
 stateSrv = inject(TodoStateService)

  handleAdd() {
    if (!this.newTask.title || !this.newTask.owner) return;
    this.stateSrv.handleAdd(this.newTask);
    this.newTask = { title: '', owner: '' };
    this.details.nativeElement.open = false;
  }
}
