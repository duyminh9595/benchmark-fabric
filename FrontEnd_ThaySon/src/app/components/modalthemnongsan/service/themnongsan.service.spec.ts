import { TestBed } from '@angular/core/testing';

import { ThemnongsanService } from './themnongsan.service';

describe('ThemnongsanService', () => {
  let service: ThemnongsanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemnongsanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
