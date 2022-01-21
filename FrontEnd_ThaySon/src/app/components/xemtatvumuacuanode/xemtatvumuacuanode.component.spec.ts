import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XemtatvumuacuanodeComponent } from './xemtatvumuacuanode.component';

describe('XemtatvumuacuanodeComponent', () => {
  let component: XemtatvumuacuanodeComponent;
  let fixture: ComponentFixture<XemtatvumuacuanodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XemtatvumuacuanodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XemtatvumuacuanodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
