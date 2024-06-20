import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';
import { ArticlesApiRepoService } from '../repo/articles.api.repo.service';
import { of } from 'rxjs';

describe('StateService', () => {
  let service: StateService;
  const mockSrv: ArticlesApiRepoService =
    jasmine.createSpyObj('ArticlesApiRepoService',
      {
        get: of([
          { id: '1', title: 'Article 1', author: 'Content 1' , isPublished: true},
          { id: '2', title: 'Article 2', author: 'Content 2', isPublished: false},
          { id: '3', title: 'Article 3', author: 'Content 3', isPublished: true},
        ]),
        create: of({ id: '4', title: 'New article', author: 'New author', isPublished: true }),
        update: of({ id: '1', title: 'New article', author: 'New author', isPublished: false }),
        delete: of(undefined)
      });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StateService,
        {
          provide: ArticlesApiRepoService,
          useValue: mockSrv
        }
      ]
    });
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load articles', () => {
    service.loadArticles();
    service.getState().subscribe((state) => {
      expect(state.articles.length).toBe(3);
    });
  });

  it('should return the current state', () => {
    expect(service.getActualState().articles.length).toBe(3);
  });
});
