import { TestBed } from '@angular/core/testing';

import { GemsService } from './gems.service';

describe('GemsService', () => {
  let service: GemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
