import { TestBed } from '@angular/core/testing';

import { FounderService } from './founder.service';

describe('FounderService', () => {
  let service: FounderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FounderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
