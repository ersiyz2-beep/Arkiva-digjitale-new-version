import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GjirokasterComponent } from './gjirokaster.component';

describe('GjirokasterComponent', () => {
  let component: GjirokasterComponent;
  let fixture: ComponentFixture<GjirokasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GjirokasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GjirokasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
