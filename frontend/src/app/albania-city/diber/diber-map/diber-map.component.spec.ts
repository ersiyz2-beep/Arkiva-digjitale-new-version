import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiberMapComponent } from './diber-map.component';

describe('DiberMapComponent', () => {
  let component: DiberMapComponent;
  let fixture: ComponentFixture<DiberMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiberMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiberMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
