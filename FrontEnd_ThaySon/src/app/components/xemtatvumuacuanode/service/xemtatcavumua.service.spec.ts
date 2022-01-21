import { TestBed } from '@angular/core/testing';

import { XemtatcavumuaService } from './xemtatcavumua.service';

describe('XemtatcavumuaService', () => {
  let service: XemtatcavumuaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XemtatcavumuaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
