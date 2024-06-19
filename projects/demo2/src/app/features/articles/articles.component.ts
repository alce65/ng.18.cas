import { Component } from '@angular/core';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'cas-articles',
  standalone: true,
  imports: [ListComponent],
  template: `
    <h2>
      Artículos
    </h2>
    <cas-list></cas-list>
  `,
  styles: ``
})
export default class ArticlesComponent {

}
