import { TestBed } from '@angular/core/testing';

import { ITodoService } from './itodo.service';

describe('ITodoService', () => {
  let service: ITodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ITodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
