import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DulieuguivethietbiComponent } from './dulieuguivethietbi.component';

describe('DulieuguivethietbiComponent', () => {
  let component: DulieuguivethietbiComponent;
  let fixture: ComponentFixture<DulieuguivethietbiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DulieuguivethietbiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DulieuguivethietbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
