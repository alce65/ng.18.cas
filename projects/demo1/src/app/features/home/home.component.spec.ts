import { ComponentFixture, TestBed } from '@angular/core/testing';

import HomeComponent from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle click', () => {
    spyOn(console, 'log');
    // Esto sería lo mismo que hacer un click en el botón
    // component.handleClick({} as Event);
    const dButton = fixture.debugElement.query(By.css('button.sample'));
    // ALternativa para lanzar eventos
    // dButton.triggerEventHandler('click', {});
    const buttonElement = dButton.nativeElement as HTMLButtonElement;
    // Otra forma de lanzar eventos
    // buttonElement.dispatchEvent(new Event('click'));
    buttonElement.click();
    fixture.detectChanges();
    expect(console.log).toHaveBeenCalled();
  });

  // White box text
  xit('should handle change', () => {
    component.handleChange(1, 0);
    expect(component.count).toBe(1);
    component.handleChange(2, 1);
    expect(component.count).toBe(3);
  });

  it('should handle change', () => {
    component.clicks = 0;
    fixture.debugElement
      .query(By.css('cas-counter'))
      .triggerEventHandler('countChange', 1);
    expect(component.clicks).toBe(1);
  });
});
