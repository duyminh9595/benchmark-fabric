import { TestBed } from '@angular/core/testing';

import { ThemthietbiService } from './themthietbi.service';

describe('ThemthietbiService', () => {
  let service: ThemthietbiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemthietbiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
