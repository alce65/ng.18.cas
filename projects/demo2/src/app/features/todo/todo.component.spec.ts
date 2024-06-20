import { ComponentFixture, TestBed } from '@angular/core/testing';
import TodoComponent from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoComponent],
      providers: [
        // {
        //   provide: StorageService,
        //   useValue: {
        //     get: () => [],
        //     // eslint-disable-next-line @typescript-eslint/no-empty-function
        //     set: () => {}
        //   }
        // }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
