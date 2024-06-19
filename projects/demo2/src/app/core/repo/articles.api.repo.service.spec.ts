import { TestBed } from '@angular/core/testing';

import { ArticlesApiRepoService } from './articles.api.repo.service';
import { HttpTestingController, provideHttpClientTesting, TestRequest } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment.development';
import { provideHttpClient } from '@angular/common/http';
import { Article } from '../models/article';

describe('ArticlesApiRepoService', () => {
  let service: ArticlesApiRepoService;
  let controller: HttpTestingController;
  const expectedUrl = environment.urlAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        ArticlesApiRepoService,]
    });
    service = TestBed.inject(ArticlesApiRepoService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<Article[]> when get is called', () => {
    const articleMock: Article = { id: '1', title: 'Test Article', author: 'Test Author', isPublished: true };
    service.get().subscribe(articles => {
      expect(articles).toEqual([
        {...articleMock, author: articleMock.author.toUpperCase()}]);
    });
    const testRequest: TestRequest = controller.expectOne(expectedUrl);
    expect(testRequest.request.method).toEqual('GET');
    testRequest.flush([articleMock]);
  });
});
