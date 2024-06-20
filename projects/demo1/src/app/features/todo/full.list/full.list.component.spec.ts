import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullListComponent } from './full.list.component';
import { CreateTaskDTO } from '../../../core/models/task';
import { MockDataService } from '../../../core/data/tasks';
import { StorageService } from '../services/storage.service';

describe('FullListComponent', () => {
  let component: FullListComponent;
  let fixture: ComponentFixture<FullListComponent>;
  let storageService: StorageService;
  let dataService: MockDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullListComponent],
      providers: [MockDataService,
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

    fixture = TestBed.createComponent(FullListComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(MockDataService);
    storageService = TestBed.inject(StorageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // White Box Testing
  it('should run handleLoad from storageService and render the tasks', async () => {
    const mockTasks = [ { id: '1', title: 'Task 1', owner: 'Owner 1', isDone: false } ];
    storageService.get = () => mockTasks
    component.handleLoad();
    expect(component.tasks).toEqual(mockTasks);
  });

  it('should run handleLoad from mock, when storageService is empty, and render the tasks', async () => {
    const tasks =  await dataService.getTasksAsync();
    storageService.get = () => [];
    await component.handleLoad();
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
