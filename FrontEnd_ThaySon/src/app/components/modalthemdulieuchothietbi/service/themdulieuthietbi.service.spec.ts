import { TestBed } from '@angular/core/testing';

import { ThemdulieuthietbiService } from './themdulieuthietbi.service';

describe('ThemdulieuthietbiService', () => {
  let service: ThemdulieuthietbiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemdulieuthietbiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
