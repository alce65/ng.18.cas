import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'cas-signals',
  standalone: true,
  imports: [],
  template: `
    <h3>Signals</h3>
    <p>
      Contador sin Signal: {{oldCount}}
    </p>
    <p>
      Contador: {{ count() }}
    </p>
    <p>
      Lista items: {{ listCount() }}
    </p>
    <ul>
      @for (item of list(); track $index) {
        <li> {{item}}</li>
      }
    </ul>
    <button (click)="addItem()"> Add  </button>
  `,
  styles: ``
})
export class SignalsComponent {
  oldCount = 0
  count = signal(0)
  list = signal<string[]>(['Pepe', 'Luis', 'Juan'])
  listCount = computed(() => this.list().length)


  constructor() {
    setInterval(() => {
      this.oldCount += 1
      this.count.update(n => n + 1)
    }, 500)

    effect(() => {
      console.log('List changed', this.list())
    })
  }

  addItem() {
    this.list.update(list => [...list, `Item ${this.listCount()}`])
  }

}
