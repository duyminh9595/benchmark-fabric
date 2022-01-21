import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatainthuhoachComponent } from './datainthuhoach.component';

describe('DatainthuhoachComponent', () => {
  let component: DatainthuhoachComponent;
  let fixture: ComponentFixture<DatainthuhoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatainthuhoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatainthuhoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
