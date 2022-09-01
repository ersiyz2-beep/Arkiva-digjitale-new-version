import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShkoderComponent } from './shkoder.component';

describe('ShkoderComponent', () => {
  let component: ShkoderComponent;
  let fixture: ComponentFixture<ShkoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShkoderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShkoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
