import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorceMapComponent } from './korce-map.component';

describe('KorceMapComponent', () => {
  let component: KorceMapComponent;
  let fixture: ComponentFixture<KorceMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorceMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KorceMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
