import { Component, inject } from '@angular/core';
import { StateService } from '../../core/services/state.service';
import { AsyncPipe } from '@angular/common';
import { SignalsComponent } from './signals/signals.component';
import { TodoStateService } from '../../core/services/todo.state.service';

@Component({
  selector: 'cas-home',
  standalone: true,
  imports: [SignalsComponent, AsyncPipe],
  template: `
    <h2>Inicio</h2>

    @if((articlesStateSrv.getState() | async)?.articles; as articles) {
      <p>Artículos disponibles {{articles?.length }}</p>
    }
    @if(todoStateSrv.getState(); as todoState){
      <p>Tareas en la lista: {{  todoState().tasks().length}}</p>
      <p>Tareas pendientes: {{ todoStateSrv.getPendingTasksNumber() }}</p>
    }
    
    <hr>
    <cas-signals />
  `,
  styles: ``,
})
export default class HomeComponent {

  protected articlesStateSrv = inject(StateService);
  protected todoStateSrv = inject(TodoStateService);

}
