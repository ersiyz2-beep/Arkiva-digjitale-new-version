import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMapComponent } from './carousel-map.component';

describe('CarouselMapComponent', () => {
  let component: CarouselMapComponent;
  let fixture: ComponentFixture<CarouselMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
