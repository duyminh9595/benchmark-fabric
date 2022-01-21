import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XemtatcakhuvucComponent } from './xemtatcakhuvuc.component';

describe('XemtatcakhuvucComponent', () => {
  let component: XemtatcakhuvucComponent;
  let fixture: ComponentFixture<XemtatcakhuvucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XemtatcakhuvucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XemtatcakhuvucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
