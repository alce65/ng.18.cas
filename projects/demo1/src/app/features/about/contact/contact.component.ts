import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



// ReactiveFormsModule -> Model-driven forms are more robust, scalable, reusable, and testable.
// Template-driven forms are suitable for adding a simple form to an app, such as an email list signup form.

// ReactiveFormsModule
// FormGroup -> FormControls

@Component({
  selector: 'cas-contact',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  template: `
    <h3>
      Contact
    </h3>
    <form [formGroup]="form"  (ngSubmit)="handleSubmit()">
      <div>
        <input type="text" placeholder="Name" formControlName="name">
        @if (form.get('name')?.touched && form.get('name')?.invalid) {
          <p>El campo name es requerido</p>
        }
      </div>
      <div>
        <input type="email" placeholder="Email" formControlName="email">
        @if (form.get('email')?.touched && form.get('email')?.invalid) {
          @if (form.get('email')?.errors?.['required']) {
          <p>El campo email es requerido</p>
          } @else {
          <p>El campo email no es un email válido</p>
          }
        }
      </div>
      <div>
        <input type="password" placeholder="Password" formControlName="password">
        @if (form.get('password')?.touched && form.get('password')?.invalid) {
          @if (form.get('password')?.errors?.['required']) {
          <p>El campo password es requerido</p>
          } @else {
          <p>El campo password debe tener un mínimo de 5 caracteres</p>
          }
        }
      </div>
      <div>
        <input type="checkbox" formControlName="terms"> Estoy de acuerdo con ....
        @if (form.get('terms')?.touched && form.get('terms')?.invalid) {
          <p>Es necesario aceptar los términos</p>
        }
      </div>
      <div>
        <select formControlName="course">
          <option value="">Selecciona un curso</option>
          @for (course of coursesOptions; track course.id) {
            <option [ngValue]="course" [title]="course.info">{{ course.name }}</option>
          }

        </select>
      </div>
      <button type="submit" [disabled]="form.invalid">Enviar</button>
    </form>
    <pre>{{ form.value | json }}</pre>

  `,
  styles: ``
})
export class ContactComponent {
  private fb = inject(FormBuilder)
  form: FormGroup
  coursesOptions = [
    { id: 1, name: 'Angular', info: 'Angular...' },
    { id: 2, name: 'React', info: 'React...'},
    { id: 3, name: 'Vue', info: 'Vue...'}
  ]
  constructor() {
    // this.form = new FormGroup({
    //   name: new FormControl(''),
    //   email: new FormControl(''),
    //   message: new FormControl('')
    // })
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      terms: [false, [Validators.requiredTrue]], // checkbox
      course: ['', [Validators.required]]
    })
  }
  handleSubmit() {
    console.log(this.form.value)
  }
}
