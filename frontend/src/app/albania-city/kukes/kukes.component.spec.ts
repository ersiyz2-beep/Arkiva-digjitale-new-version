import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KukesComponent } from './kukes.component';

describe('KukesComponent', () => {
  let component: KukesComponent;
  let fixture: ComponentFixture<KukesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KukesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KukesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
