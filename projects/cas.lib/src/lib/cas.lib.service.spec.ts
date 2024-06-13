import { TestBed } from '@angular/core/testing';

import { CasLibService } from './cas.lib.service';

describe('CasLibService', () => {
  let service: CasLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
