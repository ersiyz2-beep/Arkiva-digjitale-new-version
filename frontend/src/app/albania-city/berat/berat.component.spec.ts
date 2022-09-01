import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeratComponent } from './berat.component';

describe('BeratComponent', () => {
  let component: BeratComponent;
  let fixture: ComponentFixture<BeratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
