import { TestBed } from '@angular/core/testing';

import { DanhsachthietbicuanodeService } from './danhsachthietbicuanode.service';

describe('DanhsachthietbicuanodeService', () => {
  let service: DanhsachthietbicuanodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DanhsachthietbicuanodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
