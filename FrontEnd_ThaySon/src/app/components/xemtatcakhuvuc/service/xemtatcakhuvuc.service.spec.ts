import { TestBed } from '@angular/core/testing';

import { XemtatcakhuvucService } from './xemtatcakhuvuc.service';

describe('XemtatcakhuvucService', () => {
  let service: XemtatcakhuvucService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XemtatcakhuvucService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
