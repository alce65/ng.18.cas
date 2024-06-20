import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddComponent } from './add.component';
import { By } from '@angular/platform-browser';
import { StateService } from '../../../core/services/state.service';
import { of } from 'rxjs';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
  let service: StateService;
  const mockSrv: StateService =
    jasmine.createSpyObj('StateService',
      {
        getState: of({articles: []}),
        addArticles: of({articles: []}),
      });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddComponent],
      providers: [
        {
          provide: StateService,
          useValue: mockSrv
        }
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(StateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(service).toBeTruthy();
  });

  it('should get the data in the form', () => {
    spyOn(component, 'handleAdd').and.callThrough();
    // spyOn(component.addEvent, 'next').and.callThrough();
    const inputs = fixture.debugElement.queryAll(By.css('input'));
    const button = fixture.debugElement.query(By.css('button'));
    inputs[0].nativeElement.value = 'New article';
    inputs[0].nativeElement.dispatchEvent(new Event('input'));
    inputs[1].nativeElement.value = 'New owner';
    inputs[1].nativeElement.dispatchEvent(new Event('input'));
    button.nativeElement.click();
    fixture.detectChanges();
    expect(component.handleAdd).toHaveBeenCalled();
    // expect(component.addEvent.next).toHaveBeenCalledWith({ title: 'New article', author: 'New owner' });
  })

  it('should not add a new article without data', () => {
    spyOn(component, 'handleAdd').and.callThrough();
    // spyOn(component.addEvent, 'next').and.callThrough();
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    fixture.detectChanges();
    expect(component.handleAdd).toHaveBeenCalled();
    // expect(component.addEvent.next).not.toHaveBeenCalled();
  });
});
