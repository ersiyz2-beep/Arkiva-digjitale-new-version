import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VloreMapComponent } from './vlore-map.component';

describe('VloreMapComponent', () => {
  let component: VloreMapComponent;
  let fixture: ComponentFixture<VloreMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VloreMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VloreMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
