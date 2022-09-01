import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LezheMapComponent } from './lezhe-map.component';

describe('LezheMapComponent', () => {
  let component: LezheMapComponent;
  let fixture: ComponentFixture<LezheMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LezheMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LezheMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
