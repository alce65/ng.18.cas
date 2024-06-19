import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { Article } from '../../../core/models/article';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.item = {
      id: '1',
      title: 'New article',
      author: 'New author',
      isPublished: false,
    } as Article;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should emit delete event', () => {
    spyOn(component, "handleDelete").and.callThrough();
    spyOn(component.deleteEvent, 'next');
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    expect(component.handleDelete).toHaveBeenCalled();
    expect(component.deleteEvent.next).toHaveBeenCalledWith('1');
  });

  it('should emit update event', () => {
    spyOn(component, "handleChange").and.callThrough();
    spyOn(component.updateEvent, 'next');
    const checkbox = fixture.debugElement.query(By.css('input'));
    checkbox.triggerEventHandler('change', null);
    expect(component.handleChange).toHaveBeenCalled();
    expect(component.updateEvent.next).toHaveBeenCalled();
  });
});
