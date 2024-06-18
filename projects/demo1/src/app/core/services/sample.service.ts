import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  getGreet() {
    return 'Hello World!';
  }
}
