import { TestBed } from '@angular/core/testing';

import { ThemvumuaService } from './themvumua.service';

describe('ThemvumuaService', () => {
  let service: ThemvumuaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemvumuaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
