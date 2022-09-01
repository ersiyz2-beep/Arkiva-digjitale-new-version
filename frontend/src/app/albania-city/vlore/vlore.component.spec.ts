import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VloreComponent } from './vlore.component';

describe('VloreComponent', () => {
  let component: VloreComponent;
  let fixture: ComponentFixture<VloreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VloreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
