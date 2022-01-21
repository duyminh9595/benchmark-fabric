import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachthietbiComponent } from './danhsachthietbi.component';

describe('DanhsachthietbiComponent', () => {
  let component: DanhsachthietbiComponent;
  let fixture: ComponentFixture<DanhsachthietbiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhsachthietbiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachthietbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
