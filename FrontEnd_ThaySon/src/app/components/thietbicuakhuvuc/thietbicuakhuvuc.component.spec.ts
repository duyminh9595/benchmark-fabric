import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThietbicuakhuvucComponent } from './thietbicuakhuvuc.component';

describe('ThietbicuakhuvucComponent', () => {
  let component: ThietbicuakhuvucComponent;
  let fixture: ComponentFixture<ThietbicuakhuvucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThietbicuakhuvucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThietbicuakhuvucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
