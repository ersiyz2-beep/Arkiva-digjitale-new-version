import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiranaMapComponent } from './tirana-map.component';

describe('TiranaMapComponent', () => {
  let component: TiranaMapComponent;
  let fixture: ComponentFixture<TiranaMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiranaMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiranaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
