import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldotchamsocComponent } from './modaldotchamsoc.component';

describe('ModaldotchamsocComponent', () => {
  let component: ModaldotchamsocComponent;
  let fixture: ComponentFixture<ModaldotchamsocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldotchamsocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaldotchamsocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
