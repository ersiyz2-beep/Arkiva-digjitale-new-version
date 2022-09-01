import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElbasanComponent } from './elbasan.component';

describe('ElbasanComponent', () => {
  let component: ElbasanComponent;
  let fixture: ComponentFixture<ElbasanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElbasanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElbasanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
