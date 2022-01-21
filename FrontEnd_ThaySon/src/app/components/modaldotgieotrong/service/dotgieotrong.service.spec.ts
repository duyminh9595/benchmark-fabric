import { TestBed } from '@angular/core/testing';

import { DotgieotrongService } from './dotgieotrong.service';

describe('DotgieotrongService', () => {
  let service: DotgieotrongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DotgieotrongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
