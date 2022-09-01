import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiberAuthorListComponent } from './diber-author-list.component';

describe('DiberAuthorListComponent', () => {
  let component: DiberAuthorListComponent;
  let fixture: ComponentFixture<DiberAuthorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiberAuthorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiberAuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
