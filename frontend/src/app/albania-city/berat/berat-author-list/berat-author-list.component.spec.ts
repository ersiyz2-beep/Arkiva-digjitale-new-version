import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeratAuthorListComponent } from './berat-author-list.component';

describe('BeratAuthorListComponent', () => {
  let component: BeratAuthorListComponent;
  let fixture: ComponentFixture<BeratAuthorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeratAuthorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeratAuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
