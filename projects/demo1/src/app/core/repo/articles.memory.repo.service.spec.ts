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
  it('should get article by id', () => {
    service.getById('1').subscribe((article) => {
      expect(article.id).toBe('1');
    });
  });
  it('should NOT get article by INVALID id', () => {
    service.getById('INVALID').subscribe({
      error: (error) => {
        expect(error.message).toBe('Article not found');
      },
    });
  });
  it('should create article', () => {
    service.create({ title: 'Test', author: 'Test' }).subscribe((article) => {
      expect(article.id).toBeDefined();
    });
  });
  it('should update article', () => {
    service.update('1', { title: 'Test' }).subscribe((article) => {
      expect(article.title).toBe('Test');
    });
  });
  it('should NOT update article with INVALID id', () => {
    service.update('INVALID', { title: 'Test' }).subscribe({
      error: (error) => {
        expect(error.message).toBe('Article not found');
      },
    });
  });
  it('should delete article', () => {
    service.delete('1').subscribe(() => {
      service.get().subscribe((articles) => {
        expect(articles.length).toBe(2);
      });
    });
  });
  it('should NOT delete article with INVALID id', () => {
    service.delete('INVALID').subscribe({
      error: (error) => {
        expect(error.message).toBe('Article not found');
      },
    });
  });
});
