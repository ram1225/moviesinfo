import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingMoviesComponent } from './trending-movies.component';

describe('TrendingMoviesComponent', () => {
  let component: TrendingMoviesComponent;
  let fixture: ComponentFixture<TrendingMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
