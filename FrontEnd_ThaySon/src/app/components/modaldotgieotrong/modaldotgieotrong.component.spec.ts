import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldotgieotrongComponent } from './modaldotgieotrong.component';

describe('ModaldotgieotrongComponent', () => {
  let component: ModaldotgieotrongComponent;
  let fixture: ComponentFixture<ModaldotgieotrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldotgieotrongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaldotgieotrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
