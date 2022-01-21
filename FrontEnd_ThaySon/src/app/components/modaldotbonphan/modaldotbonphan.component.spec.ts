import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldotbonphanComponent } from './modaldotbonphan.component';

describe('ModaldotbonphanComponent', () => {
  let component: ModaldotbonphanComponent;
  let fixture: ComponentFixture<ModaldotbonphanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldotbonphanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaldotbonphanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
