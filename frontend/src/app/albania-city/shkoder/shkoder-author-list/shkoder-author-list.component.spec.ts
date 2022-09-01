import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShkoderAuthorListComponent } from './shkoder-author-list.component';

describe('ShkoderAuthorListComponent', () => {
  let component: ShkoderAuthorListComponent;
  let fixture: ComponentFixture<ShkoderAuthorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShkoderAuthorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShkoderAuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
