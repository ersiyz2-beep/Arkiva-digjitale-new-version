import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurresComponent } from './durres.component';

describe('DurresComponent', () => {
  let component: DurresComponent;
  let fixture: ComponentFixture<DurresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
