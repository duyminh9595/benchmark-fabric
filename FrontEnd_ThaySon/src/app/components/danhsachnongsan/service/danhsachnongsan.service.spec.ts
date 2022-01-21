import { TestBed } from '@angular/core/testing';

import { DanhsachnongsanService } from './danhsachnongsan.service';

describe('DanhsachnongsanService', () => {
  let service: DanhsachnongsanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DanhsachnongsanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
