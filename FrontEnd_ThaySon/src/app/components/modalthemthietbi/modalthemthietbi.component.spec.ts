import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalthemthietbiComponent } from './modalthemthietbi.component';

describe('ModalthemthietbiComponent', () => {
  let component: ModalthemthietbiComponent;
  let fixture: ComponentFixture<ModalthemthietbiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalthemthietbiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalthemthietbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
