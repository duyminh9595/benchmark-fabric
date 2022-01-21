import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalthemdulieuchothietbiComponent } from './modalthemdulieuchothietbi.component';

describe('ModalthemdulieuchothietbiComponent', () => {
  let component: ModalthemdulieuchothietbiComponent;
  let fixture: ComponentFixture<ModalthemdulieuchothietbiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalthemdulieuchothietbiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalthemdulieuchothietbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
