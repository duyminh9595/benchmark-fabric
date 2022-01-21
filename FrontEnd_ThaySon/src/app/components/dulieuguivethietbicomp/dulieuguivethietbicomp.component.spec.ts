import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DulieuguivethietbicompComponent } from './dulieuguivethietbicomp.component';

describe('DulieuguivethietbicompComponent', () => {
  let component: DulieuguivethietbicompComponent;
  let fixture: ComponentFixture<DulieuguivethietbicompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DulieuguivethietbicompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DulieuguivethietbicompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
