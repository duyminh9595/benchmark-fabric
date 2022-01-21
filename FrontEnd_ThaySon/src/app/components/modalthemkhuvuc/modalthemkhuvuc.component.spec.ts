import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalthemkhuvucComponent } from './modalthemkhuvuc.component';

describe('ModalthemkhuvucComponent', () => {
  let component: ModalthemkhuvucComponent;
  let fixture: ComponentFixture<ModalthemkhuvucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalthemkhuvucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalthemkhuvucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
