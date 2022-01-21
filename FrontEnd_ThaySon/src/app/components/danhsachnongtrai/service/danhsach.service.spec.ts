import { TestBed } from '@angular/core/testing';

import { DanhsachService } from './danhsach.service';

describe('DanhsachService', () => {
  let service: DanhsachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DanhsachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
