import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiberComponent } from './diber.component';

describe('DiberComponent', () => {
  let component: DiberComponent;
  let fixture: ComponentFixture<DiberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
