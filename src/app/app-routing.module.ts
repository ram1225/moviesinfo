import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';

import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/trending', pathMatch: 'full' },
  { path: 'trending',  component: TrendingMoviesComponent },
  { path: 'all',     component: AllMoviesComponent },
  { path: 'movie-details/:id',     component: MovieDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}