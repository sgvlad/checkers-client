import { TestBed } from '@angular/core/testing';

import { CheckersApiService } from './checkers-api.service';

describe('CheckersApiService', () => {
  let service: CheckersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
