import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { Article } from '../../../core/models/article';
import { of } from 'rxjs';
import { ArticlesApiRepoService } from '../../../core/repo/articles.api.repo.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ArticlesApiRepoService;
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
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent],
      providers: [
        {
          provide: ArticlesApiRepoService,
          useValue: mockSrv
        }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ArticlesApiRepoService);
    fixture.detectChanges();
  });

  it('should create', async () => {
    // TEMP spyOn(component, 'ngOnInit').and.callThrough();
    // spyOn(component, 'handleLoad').and.callThrough();
    expect(component).toBeTruthy();
    // TEMP await fixture.whenStable();
    // fixture.detectChanges();
    // expect(component.ngOnInit).toHaveBeenCalled();
    // expect(component.handleLoad).toHaveBeenCalled();
  });
  it('should run handleAdd and add a new article', () => {
    const newArticle = { title: 'New article', author: 'New author' }
    component.handleAdd(newArticle);
    expect(service.create).toHaveBeenCalled();
    expect(component.articles[component.articles.length -1].title).toBe(newArticle.title);
  });

  it('should run handleChange and change the article status', () => {
    const updatedArticle: Article = {
      id: component.articles[0].id,
      title: 'New article', author: 'New author',
      isPublished: false
    }
    component.handleUpdate(updatedArticle);
    expect(component.articles[0].isPublished).toBe(false);
  });


  it('should run handleDelete and delete the article', () => {
    const articleId = component.articles[0].id;
    component.handleDelete(articleId);
    expect(component.articles.find(article => article.id === articleId)).toBeUndefined();
  });
});
