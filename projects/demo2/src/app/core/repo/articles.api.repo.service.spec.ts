import { TestBed } from '@angular/core/testing';

import { ArticlesApiRepoService } from './articles.api.repo.service';
import { HttpTestingController, provideHttpClientTesting, TestRequest } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment.development';
import { provideHttpClient } from '@angular/common/http';
import { Article, CreateArticleDTO } from '../models/article';

describe('ArticlesApiRepoService', () => {
  let service: ArticlesApiRepoService;
  let controller: HttpTestingController;
  const expectedUrl = environment.urlAPI;
  const articleMock: Article = { id: '1', title: 'Test Article', author: 'Test Author', isPublished: true };

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
    service.get().subscribe(articles => {
      expect(articles).toEqual([
        {...articleMock, author: articleMock.author.toUpperCase()}]);
    });
    const testRequest: TestRequest = controller.expectOne(expectedUrl);
    expect(testRequest.request.method).toEqual('GET');
    testRequest.flush([articleMock]);
  });

  it('should return an Observable<Article> when getById is called', () => {
    service.getById('1').subscribe(article => {
      expect(article).toEqual(articleMock);
    });
    const testRequest: TestRequest = controller.expectOne(`${expectedUrl}/1`);
    expect(testRequest.request.method).toEqual('GET');
    testRequest.flush(articleMock);
  });

  it('should return an Observable<Article> when create is called', () => {
    const articleDataMock: CreateArticleDTO = { title: 'Test Article', author: 'Test Author' };
    service.create(articleDataMock).subscribe(article => {
      expect(article).toEqual(articleMock);
    });
    const testRequest: TestRequest = controller.expectOne(expectedUrl);
    expect(testRequest.request.method).toEqual('POST');
    testRequest.flush(articleMock);
  });


  it('should return an Observable<Article> when update is called', () => {
    service.update('1', { title: 'Test Article' }).subscribe(article => {
      expect(article).toEqual(articleMock);
    });
    const testRequest: TestRequest = controller.expectOne(`${expectedUrl}/1`);
    expect(testRequest.request.method).toEqual('PATCH');
    testRequest.flush(articleMock);
  });

  it('should return an Observable<void> when delete is called', () => {
    service.delete('1').subscribe(() => {
      expect().nothing();
    });
    const testRequest: TestRequest = controller.expectOne(`${expectedUrl}/1`);
    expect(testRequest.request.method).toEqual('DELETE');
    testRequest.flush(null);
  });

});
