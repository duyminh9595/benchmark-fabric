import { TestBed } from '@angular/core/testing';

import { ThemkhuvucService } from './themkhuvuc.service';

describe('ThemkhuvucService', () => {
  let service: ThemkhuvucService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemkhuvucService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
