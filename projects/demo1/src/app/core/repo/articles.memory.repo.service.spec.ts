import { TestBed } from '@angular/core/testing';

import { ArticlesMemoryRepoService } from './articles.memory.repo.service';

describe('ArticlesMemoryRepoService', () => {
  let service: ArticlesMemoryRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesMemoryRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
