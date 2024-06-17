import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { MenuOptions } from '../../types/menu.options.type';

import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

const menuOptions: MenuOptions[] = [
  { title: 'Home', path: '/home' },
  { title: 'Todo', path: '/todo' },
  { title: 'About', path: '/about' },
];

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],
      providers: [provideRouter([])],
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
    const linkElements = debugLinks.map(
      (debugElement) => debugElement.nativeElement,
    );
    expect(linkElements.length).toBe(menuOptions.length);
    linkElements.forEach((linkElement, index) => {
      expect(linkElement.textContent).toBe(menuOptions[index].title);
    });
  });
});
