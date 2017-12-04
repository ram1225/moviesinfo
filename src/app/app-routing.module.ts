import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', redirectTo: '/trending', pathMatch: 'full' },
  { path: 'trending',  component: TrendingMoviesComponent },
  { path: 'all',       component: SignupFormComponent },
  { path: 'posts',     component: PostsComponent },
  { path: 'movie-details/:id',     component: MovieDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}