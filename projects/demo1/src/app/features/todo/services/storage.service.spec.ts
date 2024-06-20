import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService]
    });
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set', () => {
    spyOn(window.localStorage, 'setItem');
    service.set([]);
    expect(window.localStorage.setItem).toHaveBeenCalled();
  });

  it('should get when there are data in the storage', () => {
    const mockData = [{ id: '1', title: 'Task 1', owner: 'Owner 1', isDone: false }];
    spyOn(window.localStorage, 'getItem').and.returnValue(JSON.stringify(mockData));
    const result = service.get();
    expect(window.localStorage.getItem).toHaveBeenCalled();
    expect(result).toEqual(mockData);
  });

  it('should get [] when there are NOT data in the storage', () => {
    spyOn(window.localStorage, 'getItem');
    const result = service.get();
    expect(window.localStorage.getItem).toHaveBeenCalled();
    expect(result).toEqual([]);
  });


  it('should remove', () => {
    spyOn(window.localStorage, 'removeItem');
    service.remove();
    expect(window.localStorage.removeItem).toHaveBeenCalled();
  });
});
