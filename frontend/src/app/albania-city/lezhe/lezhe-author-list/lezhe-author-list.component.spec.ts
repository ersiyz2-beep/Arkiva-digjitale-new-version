import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LezheAuthorListComponent } from './lezhe-author-list.component';

describe('LezheAuthorListComponent', () => {
  let component: LezheAuthorListComponent;
  let fixture: ComponentFixture<LezheAuthorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LezheAuthorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LezheAuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
