import { Component, inject, } from '@angular/core';
import { AddComponent } from '../add/add.component';
import { CardComponent } from '../card/card.component';
import { StateService } from '../../../core/services/state.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'cas-list',
  standalone: true,
  imports: [AddComponent, CardComponent, AsyncPipe],
  template: `
    <cas-add />
    <h3>Lista de artículos</h3>
    @if (hasError) {
      <p>Error al cargar los artículos</p>
    }
    @if((stateSrv.getState() | async)?.articles; as articles ) {
      <ul>
        @for (item of articles; track item.id) {
          <li>
            <cas-card [item]="item"/>
          </li>
        }
      </ul>
    }

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
export class ListComponent {
  protected stateSrv = inject(StateService)
  hasError = false;

}
