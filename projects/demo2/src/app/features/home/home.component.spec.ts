import { ComponentFixture, TestBed } from '@angular/core/testing';
import HomeComponent from './home.component';
import { State, StateService } from '../../core/services/state.service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const mockState: State = {articles: []}
  const mockStateService = jasmine.createSpyObj('StateService', {
    getState: of(mockState),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        {
          provide: StateService,
          useValue: mockStateService,
        }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
