import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalthemvumuaComponent } from './modalthemvumua.component';

describe('ModalthemvumuaComponent', () => {
  let component: ModalthemvumuaComponent;
  let fixture: ComponentFixture<ModalthemvumuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalthemvumuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalthemvumuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
