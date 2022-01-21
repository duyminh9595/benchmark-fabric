import { TestBed } from '@angular/core/testing';

import { ThietbicuakhuvucService } from './thietbicuakhuvuc.service';

describe('ThietbicuakhuvucService', () => {
  let service: ThietbicuakhuvucService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThietbicuakhuvucService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
