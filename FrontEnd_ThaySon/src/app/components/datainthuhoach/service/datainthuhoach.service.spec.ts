import { TestBed } from '@angular/core/testing';

import { DatainthuhoachService } from './datainthuhoach.service';

describe('DatainthuhoachService', () => {
  let service: DatainthuhoachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatainthuhoachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
