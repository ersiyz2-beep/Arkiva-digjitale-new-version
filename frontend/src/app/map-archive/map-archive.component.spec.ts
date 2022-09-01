import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapArchiveComponent } from './map-archive.component';

describe('MapArchiveComponent', () => {
  let component: MapArchiveComponent;
  let fixture: ComponentFixture<MapArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapArchiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
