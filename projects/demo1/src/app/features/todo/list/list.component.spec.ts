import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { Task } from '../../../core/models/task';
import { StorageService } from '../services/storage.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent],
      providers: [
        {
          provide: StorageService,
          useValue: {
            get: () => [],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            set: () => {}
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    // TEMP spyOn(component, 'ngOnInit').and.callThrough();
    // spyOn(component, 'handleLoad').and.callThrough();
    expect(component).toBeTruthy();
    // TEMP await fixture.whenStable();
    // fixture.detectChanges();
    // expect(component.ngOnInit).toHaveBeenCalled();
    // expect(component.handleLoad).toHaveBeenCalled();
  });

  it('should run handleAdd and add a new task', () => {
    const newTask = { title: 'New task', owner: 'New owner' }
    component.handleAdd(newTask);
    expect(component.tasks[component.tasks.length -1].title).toBe(newTask.title);
  });

  it('should run handleChange and change the task status', () => {
    const updatedTask: Task = {
      id: component.tasks[0].id,
      title: 'New task', owner: 'New owner',
      isDone: false
    }
    component.handleUpdate(updatedTask);
    expect(component.tasks[0].isDone).toBe(false);
  });


  it('should run handleDelete and delete the task', () => {
    const taskId = component.tasks[0].id;
    component.handleDelete(taskId);
    expect(component.tasks.find(task => task.id === taskId)).toBeUndefined();
  });
});
