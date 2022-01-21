import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachnongtraiComponent } from './danhsachnongtrai.component';

describe('DanhsachnongtraiComponent', () => {
  let component: DanhsachnongtraiComponent;
  let fixture: ComponentFixture<DanhsachnongtraiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhsachnongtraiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachnongtraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
