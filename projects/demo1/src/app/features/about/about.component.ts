import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CasLibComponent } from 'cas.lib';

@Component({
  selector: 'cas-about',
  standalone: true,
  imports: [FormsModule, CasLibComponent],
  template: `
    <p>about works!</p>
    <cas-sample></cas-sample>
  `,
  styles: ``,
})
export default class AboutComponent {}
