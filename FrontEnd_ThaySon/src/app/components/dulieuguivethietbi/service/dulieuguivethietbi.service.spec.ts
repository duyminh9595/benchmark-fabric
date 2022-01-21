import { TestBed } from '@angular/core/testing';

import { DulieuguivethietbiService } from './dulieuguivethietbi.service';

describe('DulieuguivethietbiService', () => {
  let service: DulieuguivethietbiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DulieuguivethietbiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
