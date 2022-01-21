import { TestBed } from '@angular/core/testing';

import { GetListKhoaService } from './get-list-khoa.service';

describe('GetListKhoaService', () => {
  let service: GetListKhoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListKhoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
