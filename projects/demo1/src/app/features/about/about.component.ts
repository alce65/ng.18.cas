import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CasLibComponent } from 'cas.lib';
import { SampleService } from '../../core/services/sample.service';

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
export default class AboutComponent {
  constructor(private sampleSrv: SampleService) {
    console.log(this.sampleSrv.getGreet() )
  }
}
