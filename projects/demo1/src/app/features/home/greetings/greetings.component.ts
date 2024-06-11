import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cas-greetings',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>
      <ng-content select=".title"></ng-content>
    </h2>
    <p [title]="'Saludando a ' + user">Hola, {{ user ? user : 'amigo' }}!</p>
    <input [(ngModel)]="user" placeholder="Escribe tu nombre" />
    <button (click)="handleClick()">Borrar</button>
    <div>
      <ng-content select=".course"></ng-content>
    </div>
    <div>
      <ng-content></ng-content>
    </div>
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
