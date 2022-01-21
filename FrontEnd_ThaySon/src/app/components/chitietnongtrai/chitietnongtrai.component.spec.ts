import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietnongtraiComponent } from './chitietnongtrai.component';

describe('ChitietnongtraiComponent', () => {
  let component: ChitietnongtraiComponent;
  let fixture: ComponentFixture<ChitietnongtraiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitietnongtraiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietnongtraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
