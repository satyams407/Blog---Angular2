import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesblogComponent } from './favoritesblog.component';

describe('FavoritesblogComponent', () => {
  let component: FavoritesblogComponent;
  let fixture: ComponentFixture<FavoritesblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
