import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VloreAuthorListComponent } from './vlore-author-list.component';

describe('VloreAuthorListComponent', () => {
  let component: VloreAuthorListComponent;
  let fixture: ComponentFixture<VloreAuthorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VloreAuthorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VloreAuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
