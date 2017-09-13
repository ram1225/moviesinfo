import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';

import { AppRoutingModule } from './app-routing.module';

import { MoviesService } from './services/movies.service';
import { GenresService } from './services/genres.service';

import { TruncateModule } from 'ng2-truncate';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SearchComponent } from './search/search.component';
import { FormsModule, FormControl, ReactiveFormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TrendingMoviesComponent,
    AllMoviesComponent,
    MovieDetailsComponent,
    SearchComponent
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    TruncateModule,
    LazyLoadImageModule,
    ReactiveFormsModule
  ],
  
  providers: [MoviesService,GenresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
