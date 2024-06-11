import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cas-greetings',
  standalone: true,
  imports: [FormsModule],
  template: `
    <p [title]="'Saludando a ' + user">Hola, {{ user ? user : 'amigo' }}!</p>
    <input [(ngModel)]="user" placeholder="Escribe tu nombre" />
    <button (click)="handleClick()">Borrar</button>
  `,
  styles: `
    p {
      color: blue;
    }
  `,
})
export class GreetingsComponent {
  user = '';

  handleClick() {
    this.user = '';
  }
}

// vista  ----> componente
//        <----
