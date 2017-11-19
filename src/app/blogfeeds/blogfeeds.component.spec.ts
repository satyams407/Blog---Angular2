import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogfeedsComponent } from './blogfeeds.component';

describe('BlogfeedsComponent', () => {
  let component: BlogfeedsComponent;
  let fixture: ComponentFixture<BlogfeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogfeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogfeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
