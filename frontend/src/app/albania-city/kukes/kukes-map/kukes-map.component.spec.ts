import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KukesMapComponent } from './kukes-map.component';

describe('KukesMapComponent', () => {
  let component: KukesMapComponent;
  let fixture: ComponentFixture<KukesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KukesMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KukesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
