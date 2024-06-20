import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { Task } from '../../../core/models/task';


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent],
      providers: [
        // {
        //   provide: StorageService,
        //   useValue: mockStorageService
        // }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    spyOn(component, 'handleLoad').and.callThrough();
    fixture.detectChanges();
  });

  it('should create and run handleLoad and load tasks',  () => {
    expect(component).toBeTruthy();
    expect(component.handleLoad).toHaveBeenCalled();
  });

  // it('should run handleLoad from storageService and render the tasks', async () => {
  //   const mockTasks = [ { id: '1', title: 'Task 1', owner: 'Owner 1', isDone: false } ];
  //   mockStorageService.get = () => mockTasks
  //   component.handleLoad();
  //   expect(component.tasks).toEqual(mockTasks);
  // });

  xit('should run handleAdd and add a new task', () => {
    const newTask = { title: 'New task', owner: 'New owner' }
    component.handleAdd(newTask);
    expect(component.tasks[component.tasks.length -1].title).toBe(newTask.title);
  });

  it('should run handleChange and change the task status', () => {
    component.tasks = [{ id: '1', title: 'Task 1', owner: 'Owner 1', isDone: false },
      { id: '2', title: 'Task 2', owner: 'Owner 2', isDone: false }];
    const updatedTask: Task = {
      id: component.tasks[0].id,
      title: 'New task', owner: 'New owner',
      isDone: false
    }
    component.handleUpdate(updatedTask);
    expect(component.tasks[0].isDone).toBe(false);
  });


  xit('should run handleDelete and delete the task', () => {
    const taskId = component.tasks[0].id;
    component.handleDelete(taskId);
    expect(component.tasks.find(task => task.id === taskId)).toBeUndefined();
  });
});
