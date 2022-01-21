import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachnongsanComponent } from './danhsachnongsan.component';

describe('DanhsachnongsanComponent', () => {
  let component: DanhsachnongsanComponent;
  let fixture: ComponentFixture<DanhsachnongsanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhsachnongsanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachnongsanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
