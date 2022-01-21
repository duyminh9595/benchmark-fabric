import { TestBed } from '@angular/core/testing';

import { DotchamsocService } from './dotchamsoc.service';

describe('DotchamsocService', () => {
  let service: DotchamsocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DotchamsocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
