import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { CounterComponent } from './components/counter/counter.component';

@Component({
  selector: 'cas-root',
  standalone: true,
  imports: [RouterOutlet, GreetingsComponent, CounterComponent],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <cas-greetings></cas-greetings>
    <cas-counter></cas-counter>
    <p>Router outlet:</p>
    <router-outlet />
  `,
})
export class AppComponent {
  title = 'Demo1';
}
