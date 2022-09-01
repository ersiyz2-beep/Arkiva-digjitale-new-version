import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShkoderMapComponent } from './shkoder-map.component';

describe('ShkoderMapComponent', () => {
  let component: ShkoderMapComponent;
  let fixture: ComponentFixture<ShkoderMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShkoderMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShkoderMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
