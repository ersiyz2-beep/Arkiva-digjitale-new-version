import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElbasanMapComponent } from './elbasan-map.component';

describe('ElbasanMapComponent', () => {
  let component: ElbasanMapComponent;
  let fixture: ComponentFixture<ElbasanMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElbasanMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElbasanMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
