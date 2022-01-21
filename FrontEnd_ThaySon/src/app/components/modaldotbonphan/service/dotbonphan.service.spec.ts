import { TestBed } from '@angular/core/testing';

import { DotbonphanService } from './dotbonphan.service';

describe('DotbonphanService', () => {
  let service: DotbonphanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DotbonphanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
