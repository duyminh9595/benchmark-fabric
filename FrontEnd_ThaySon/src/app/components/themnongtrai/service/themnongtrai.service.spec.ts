import { TestBed } from '@angular/core/testing';

import { ThemnongtraiService } from './themnongtrai.service';

describe('ThemnongtraiService', () => {
  let service: ThemnongtraiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemnongtraiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
