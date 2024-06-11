import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change count', () => {
    const spanElement = fixture.debugElement.query(By.css('span'))
      .nativeElement as HTMLSpanElement;
    expect(spanElement.textContent).toBe('0');
    fixture.debugElement.queryAll(By.css('button'))[0].nativeElement.click();
    fixture.detectChanges();
    expect(spanElement.textContent).toBe('-1');
    fixture.debugElement.queryAll(By.css('button'))[1].nativeElement.click();
    fixture.detectChanges();
    expect(spanElement.textContent).toBe('0');
  });

  it('should not change count in the lower limit', () => {
    component.count = -5;
    expect(component.count).toBe(-5);
    component.change(-1);
    expect(component.count).toBe(-5);
  });

  it('should not change count in the upper limit', () => {
    component.count = 5;
    expect(component.count).toBe(5);
    component.change(1);
    expect(component.count).toBe(5);
  });
});
