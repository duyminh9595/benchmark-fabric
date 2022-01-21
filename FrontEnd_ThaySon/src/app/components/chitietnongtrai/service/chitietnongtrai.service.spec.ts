import { TestBed } from '@angular/core/testing';

import { ChitietnongtraiService } from './chitietnongtrai.service';

describe('ChitietnongtraiService', () => {
  let service: ChitietnongtraiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChitietnongtraiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
