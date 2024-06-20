import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should handle submit after complete the form', () => {
    spyOn(component, 'handleSubmit').and.callThrough();
    spyOn(console, 'log');
    const buttonElement = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(buttonElement.disabled).toBe(true);
    component.form.setValue({
      name: 'Test',
      email: 'test@sample.com',
      password: '12345',
      terms: true,
      course: { id: '1', name: 'Test Course', info: 'Test Course Info' }
    });
    fixture.detectChanges();
    expect(buttonElement.disabled).toBe(false);
    buttonElement.click();
    expect(component.handleSubmit).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalled();
  });
});
