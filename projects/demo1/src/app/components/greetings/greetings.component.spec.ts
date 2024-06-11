import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GreetingsComponent } from './greetings.component';
import { By } from '@angular/platform-browser';

describe('GreetingsComponent', () => {
  let component: GreetingsComponent;
  let fixture: ComponentFixture<GreetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xdescribe('White box test', () => {
    it('should handle click', () => {
      component.user = 'Pepe';
      expect(component.user).toBe('Pepe');
      component.handleClick();
      expect(component.user).toBe('');
    });
  });

  describe('Black box test', () => {
    it('should render input', () => {
      const inputElement = fixture.debugElement.query(By.css('input'))
        .nativeElement as HTMLInputElement;
      const pElement = fixture.debugElement.query(By.css('p'))
        .nativeElement as HTMLParagraphElement;
      inputElement.value = 'Pepe';
      inputElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(pElement.textContent).toContain('Pepe');
    });

    it('should handle click', () => {
      const buttonElement = fixture.debugElement.query(By.css('button'))
        .nativeElement as HTMLButtonElement;
      const pElement = fixture.debugElement.query(By.css('p'))
        .nativeElement as HTMLParagraphElement;
      component.user = 'Pepe';
      buttonElement.click();
      fixture.detectChanges();
      expect(pElement.textContent).toContain('amigo');
    });
  });
});
