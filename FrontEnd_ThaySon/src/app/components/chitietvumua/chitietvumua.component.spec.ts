import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietvumuaComponent } from './chitietvumua.component';

describe('ChitietvumuaComponent', () => {
  let component: ChitietvumuaComponent;
  let fixture: ComponentFixture<ChitietvumuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitietvumuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietvumuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
