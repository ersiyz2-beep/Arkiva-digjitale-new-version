import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FierComponent } from './fier.component';

describe('FierComponent', () => {
  let component: FierComponent;
  let fixture: ComponentFixture<FierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
