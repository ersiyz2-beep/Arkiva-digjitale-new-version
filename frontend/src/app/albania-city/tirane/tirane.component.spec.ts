import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiraneComponent } from './tirane.component';

describe('TiraneComponent', () => {
  let component: TiraneComponent;
  let fixture: ComponentFixture<TiraneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiraneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiraneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
