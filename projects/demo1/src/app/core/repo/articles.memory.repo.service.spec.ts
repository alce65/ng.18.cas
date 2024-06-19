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

  it('should get articles', () => {
    service.get().subscribe((articles) => {
      expect(articles.length).toBe(3);
    });
  });
});
