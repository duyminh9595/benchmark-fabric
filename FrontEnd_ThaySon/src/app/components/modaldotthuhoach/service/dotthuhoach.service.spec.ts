import { TestBed } from '@angular/core/testing';

import { DotthuhoachService } from './dotthuhoach.service';

describe('DotthuhoachService', () => {
  let service: DotthuhoachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DotthuhoachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
