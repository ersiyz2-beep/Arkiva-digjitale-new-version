import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurresAuthorListComponent } from './durres-author-list.component';

describe('DurresAuthorListComponent', () => {
  let component: DurresAuthorListComponent;
  let fixture: ComponentFixture<DurresAuthorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurresAuthorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurresAuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
