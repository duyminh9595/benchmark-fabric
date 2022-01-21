import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietsanphamoutputComponent } from './chitietsanphamoutput.component';

describe('ChitietsanphamoutputComponent', () => {
  let component: ChitietsanphamoutputComponent;
  let fixture: ComponentFixture<ChitietsanphamoutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitietsanphamoutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietsanphamoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
