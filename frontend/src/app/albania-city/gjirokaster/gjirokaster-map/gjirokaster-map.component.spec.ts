import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GjirokasterMapComponent } from './gjirokaster-map.component';

describe('GjirokasterMapComponent', () => {
  let component: GjirokasterMapComponent;
  let fixture: ComponentFixture<GjirokasterMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GjirokasterMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GjirokasterMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
