import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiranaAuthorListComponent } from './tirana-author-list.component';

describe('TiranaAuthorListComponent', () => {
  let component: TiranaAuthorListComponent;
  let fixture: ComponentFixture<TiranaAuthorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiranaAuthorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiranaAuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
