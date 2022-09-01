import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeratMapComponent } from './berat-map.component';

describe('BeratMapComponent', () => {
  let component: BeratMapComponent;
  let fixture: ComponentFixture<BeratMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeratMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeratMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
