import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriteroAgolliComponent } from './dritero-agolli.component';

describe('DriteroAgolliComponent', () => {
  let component: DriteroAgolliComponent;
  let fixture: ComponentFixture<DriteroAgolliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriteroAgolliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriteroAgolliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
