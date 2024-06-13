import { Component } from '@angular/core';
import { GreetingsComponent } from './greetings/greetings.component';
import { CounterComponent } from './counter/counter.component';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'cas-home',
  standalone: true,
  imports: [GreetingsComponent, CounterComponent, TitleCasePipe],
  template: `
    <h2>Inicio</h2>

    <div>
      <p>Valor del contador: {{ count }}</p>
      <p>Número de clicks {{ clicks }}</p>
    </div>

    <cas-greetings>
      <button class="sample" (click)="handleClick($event)">click</button>
      <span class="title">{{ saludo | titlecase }}</span>
      <span class="course">Curso de Angular</span>
      <cas-counter (countChange)="handleChange($event, 0)"></cas-counter>
      <cas-counter (countChange)="handleChange($event, 1)"></cas-counter>
    </cas-greetings>
  `,
  styles: ``,
})
export default class HomeComponent {
  count = 0;
  countValues = [0, 0];
  clicks = 0;
  saludo = 'estamos saludando';

  handleClick(event: Event) {
    console.log(event);
  }

  handleChange(value: number, position: number) {
    this.clicks++;
    this.countValues[position] = value;
    this.count = this.countValues.reduce((acc, value) => acc + value, 0);
  }
}
