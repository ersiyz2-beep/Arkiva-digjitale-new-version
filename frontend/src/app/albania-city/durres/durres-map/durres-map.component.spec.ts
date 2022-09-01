import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurresMapComponent } from './durres-map.component';

describe('DurresMapComponent', () => {
  let component: DurresMapComponent;
  let fixture: ComponentFixture<DurresMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurresMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurresMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
