import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GjirokasterAuthorListComponent } from './gjirokaster-author-list.component';

describe('GjirokasterAuthorListComponent', () => {
  let component: GjirokasterAuthorListComponent;
  let fixture: ComponentFixture<GjirokasterAuthorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GjirokasterAuthorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GjirokasterAuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
