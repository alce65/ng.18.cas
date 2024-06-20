import { Component, inject } from '@angular/core';
import { StateService } from '../../core/services/state.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'cas-home',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h2>Inicio</h2>

    @if((stateSrv.getState() | async)?.articles; as articles) {
      <p>Artículos disponibles {{articles?.length }}</p>
    }
  `,
  styles: ``,
})
export default class HomeComponent {

  protected stateSrv = inject(StateService);

}
