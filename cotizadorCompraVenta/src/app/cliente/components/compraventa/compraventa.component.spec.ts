import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraventaComponent } from './compraventa.component';

describe('CompraventaComponent', () => {
  let component: CompraventaComponent;
  let fixture: ComponentFixture<CompraventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraventaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
