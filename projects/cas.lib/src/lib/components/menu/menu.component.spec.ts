import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { MenuOptions } from '../../types/menu.options.type';
import { routes } from '../../../app.routes';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

const menuOptions: MenuOptions[] = routes
  .filter((r) => r.title)
  .map((r) => ({ title: r.title as string, path: r.path as string }));

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    component.options = menuOptions;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render menu options', () => {
    const debugLinks = fixture.debugElement.queryAll(By.css('a'));
    expect(debugLinks.length).toBe(menuOptions.length);
    const linkElements = debugLinks.map(
      (debugElement) => debugElement.nativeElement,
    );
    linkElements.forEach((linkElement, index) => {
      expect(linkElement.textContent).toBe(menuOptions[index].title);
      // expect(linkElement.getAttribute('routerLink')).toBe(
      //   menuOptions[index].path,
      // );
    });
  });

  describe('MenuComponent', () => {
    let linkElements: HTMLAnchorElement[];
    beforeEach(() => {
      const debugLinks = fixture.debugElement.queryAll(By.css('a'));
      linkElements = debugLinks.map(
        (debugElement) => debugElement.nativeElement,
      );
    });

    it('should have select route home', fakeAsync(() => {
      linkElements[0].click();
      tick();
      expect(linkElements[0].classList).toContain('active');
      expect(linkElements[0]).toHaveClass('active');
    }));
    it('should have select route todo', fakeAsync(() => {
      linkElements[1].click();
      tick();
      expect(linkElements[1]).toHaveClass('active');
    }));
    it('should have select route about', fakeAsync(() => {
      linkElements[2].click();
      tick();
      expect(linkElements[2]).toHaveClass('active');
    }));
  });
});
