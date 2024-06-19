import { TestBed } from '@angular/core/testing';

import { ArticlesApiRepoService } from './articles.api.repo.service';

describe('ArticlesApiRepoService', () => {
  let service: ArticlesApiRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesApiRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
