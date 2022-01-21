import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemnongtraiComponent } from './themnongtrai.component';

describe('ThemnongtraiComponent', () => {
  let component: ThemnongtraiComponent;
  let fixture: ComponentFixture<ThemnongtraiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemnongtraiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemnongtraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
