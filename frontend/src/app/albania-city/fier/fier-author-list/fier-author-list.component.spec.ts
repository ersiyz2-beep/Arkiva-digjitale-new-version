import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FierAuthorListComponent } from './fier-author-list.component';

describe('FierAuthorListComponent', () => {
  let component: FierAuthorListComponent;
  let fixture: ComponentFixture<FierAuthorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FierAuthorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FierAuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
