import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasLibComponent } from './cas.lib.component';

describe('CasLibComponent', () => {
  let component: CasLibComponent;
  let fixture: ComponentFixture<CasLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
