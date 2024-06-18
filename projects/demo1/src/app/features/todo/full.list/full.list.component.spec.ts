import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullListComponent } from './full.list.component';
import { CreateTaskDTO } from '../../../core/models/task';
import { MockDataService } from '../../../core/data/tasks';

describe('FullListComponent', () => {
  let component: FullListComponent;
  let fixture: ComponentFixture<FullListComponent>;
  let service: MockDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullListComponent],
      providers: [MockDataService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(MockDataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // White Box Testing
  it('should run handleLoad and render the tasks', async () => {
    const tasks =  await service.getTasksAsync();
    expect(component.tasks).toEqual(tasks);
  });

  it('should run handleAdd and add a new task', () => {
    const newTask = { title: 'New task', owner: 'New owner' };
    component.newTask = newTask;
    component.handleAdd();
    expect(component.tasks[component.tasks.length -1].title).toBe(newTask.title);
  });

  it('should run handleAdd without a new task', () => {
    const length = component.tasks.length;
    component.newTask = {} as CreateTaskDTO;
    component.handleAdd();
    expect(component.tasks.length).toBe(length);
  });

  it('should run handleChange and change the task status', () => {
    const taskId = component.tasks[0].id;
    const status = component.tasks[0].isDone;
    component.handleChange(taskId);
    expect(component.tasks[0].isDone).toBe(!status);
  });


  it('should run handleDelete and delete the task', () => {
    const taskId = component.tasks[0].id;
    component.handleDelete(taskId);
    expect(component.tasks.find(task => task.id === taskId)).toBeUndefined();
  });
});
