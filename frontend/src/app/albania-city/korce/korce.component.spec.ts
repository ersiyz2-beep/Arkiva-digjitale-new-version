import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorceComponent } from './korce.component';

describe('KorceComponent', () => {
  let component: KorceComponent;
  let fixture: ComponentFixture<KorceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KorceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
