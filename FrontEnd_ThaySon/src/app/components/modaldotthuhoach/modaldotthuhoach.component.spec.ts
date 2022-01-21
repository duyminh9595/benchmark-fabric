import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldotthuhoachComponent } from './modaldotthuhoach.component';

describe('ModaldotthuhoachComponent', () => {
  let component: ModaldotthuhoachComponent;
  let fixture: ComponentFixture<ModaldotthuhoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldotthuhoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaldotthuhoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
