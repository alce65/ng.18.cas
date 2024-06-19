import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CasLibComponent } from 'cas.lib';
import { SampleService } from '../../core/services/sample.service';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'cas-about',
  standalone: true,
  imports: [FormsModule, CasLibComponent, ContactComponent],
  template: `
    <p>about works!</p>
    <cas-sample></cas-sample>
    <cas-contact />
  `,
  styles: ``,
})
export default class AboutComponent {
  constructor(private sampleSrv: SampleService) {
    console.log(this.sampleSrv.getGreet() )
  }
}
