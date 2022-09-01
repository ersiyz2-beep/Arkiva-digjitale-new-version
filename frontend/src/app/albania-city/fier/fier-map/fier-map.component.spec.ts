import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FierMapComponent } from './fier-map.component';

describe('FierMapComponent', () => {
  let component: FierMapComponent;
  let fixture: ComponentFixture<FierMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FierMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FierMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
