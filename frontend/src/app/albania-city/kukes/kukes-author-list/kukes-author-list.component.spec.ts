import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KukesAuthorListComponent } from './kukes-author-list.component';

describe('KukesAuthorListComponent', () => {
  let component: KukesAuthorListComponent;
  let fixture: ComponentFixture<KukesAuthorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KukesAuthorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KukesAuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
