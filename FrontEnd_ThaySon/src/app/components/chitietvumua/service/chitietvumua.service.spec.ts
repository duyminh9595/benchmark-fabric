import { TestBed } from '@angular/core/testing';

import { ChitietvumuaService } from './chitietvumua.service';

describe('ChitietvumuaService', () => {
  let service: ChitietvumuaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChitietvumuaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
