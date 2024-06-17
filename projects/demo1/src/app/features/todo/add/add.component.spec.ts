import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { By } from '@angular/platform-browser';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the data in the form', () => {
    spyOn(component, 'handleAdd').and.callThrough();
    spyOn(component.addEvent, 'next').and.callThrough();
    const inputs = fixture.debugElement.queryAll(By.css('input'));
    const button = fixture.debugElement.query(By.css('button'));
    inputs[0].nativeElement.value = 'New task';
    inputs[0].nativeElement.dispatchEvent(new Event('input'));
    inputs[1].nativeElement.value = 'New owner';
    inputs[1].nativeElement.dispatchEvent(new Event('input'));
    button.nativeElement.click();
    fixture.detectChanges();
    expect(component.handleAdd).toHaveBeenCalled();
    expect(component.addEvent.next).toHaveBeenCalledWith({ title: 'New task', owner: 'New owner' });
  })

  it('should not add a new task without data', () => {
    spyOn(component, 'handleAdd').and.callThrough();
    spyOn(component.addEvent, 'next').and.callThrough();
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    fixture.detectChanges();
    expect(component.handleAdd).toHaveBeenCalled();
    expect(component.addEvent.next).not.toHaveBeenCalled();
  });
});
