import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LezheComponent } from './lezhe.component';

describe('LezheComponent', () => {
  let component: LezheComponent;
  let fixture: ComponentFixture<LezheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LezheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LezheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
