import { Component } from '@angular/core';

@Component({
  selector: 'cas-home',
  standalone: true,
  imports: [],
  template: `
    <h2>Inicio</h2>

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
