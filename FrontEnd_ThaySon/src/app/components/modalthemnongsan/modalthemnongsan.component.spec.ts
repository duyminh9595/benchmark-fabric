import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalthemnongsanComponent } from './modalthemnongsan.component';

describe('ModalthemnongsanComponent', () => {
  let component: ModalthemnongsanComponent;
  let fixture: ComponentFixture<ModalthemnongsanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalthemnongsanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalthemnongsanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
