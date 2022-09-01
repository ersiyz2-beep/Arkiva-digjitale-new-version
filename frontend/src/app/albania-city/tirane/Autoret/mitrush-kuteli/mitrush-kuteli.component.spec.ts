import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitrushKuteliComponent } from './mitrush-kuteli.component';

describe('MitrushKuteliComponent', () => {
  let component: MitrushKuteliComponent;
  let fixture: ComponentFixture<MitrushKuteliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitrushKuteliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitrushKuteliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
