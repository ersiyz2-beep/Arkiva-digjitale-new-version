import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorceAuthorListComponent } from './korce-author-list.component';

describe('KorceAuthorListComponent', () => {
  let component: KorceAuthorListComponent;
  let fixture: ComponentFixture<KorceAuthorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorceAuthorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KorceAuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
