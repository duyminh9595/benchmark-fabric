import { TestBed } from '@angular/core/testing';

import { ChitietspoutputService } from './chitietspoutput.service';

describe('ChitietspoutputService', () => {
  let service: ChitietspoutputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChitietspoutputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
