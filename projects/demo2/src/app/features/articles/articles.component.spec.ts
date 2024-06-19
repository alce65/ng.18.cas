import { ComponentFixture, TestBed } from '@angular/core/testing';

import ArticlesComponent from './articles.component';
import { of } from 'rxjs';
import { ArticlesApiRepoService } from '../../core/repo/articles.api.repo.service';

describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;
  const mockSrv: ArticlesApiRepoService =
  jasmine.createSpyObj('ArticlesApiRepoService',
    {
      get: of([]),
      create: of({ id: '4', title: 'New article', author: 'New author', isPublished: true }),
      update: of({ id: '1', title: 'New article', author: 'New author', isPublished: false }),
      delete: of(undefined)
    });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesComponent],
      providers: [
        {
          provide: ArticlesApiRepoService,
          useValue: mockSrv
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
