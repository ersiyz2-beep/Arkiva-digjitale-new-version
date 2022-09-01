import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElbasanAuthorListComponent } from './elbasan-author-list.component';

describe('ElbasanAuthorListComponent', () => {
  let component: ElbasanAuthorListComponent;
  let fixture: ComponentFixture<ElbasanAuthorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElbasanAuthorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElbasanAuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
