import { Component } from '@angular/core';

@Component({
  selector: 'cas-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  //template: ` <p>greetings2 IN LINE works!</p> `,
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count = 0;

  change(value: number) {
    if (this.count === -5 && value === -1) return;
    if (this.count === 5 && value === 1) return;
    this.count += value;
  }

  // increment() {
  //   this.count++;
  // }

  // decrement() {
  //   this.count--;
  // }
}
