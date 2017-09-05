import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';

import { AppRoutingModule } from './app-routing.module';

import { MoviesService } from './services/movies.service';
import { GenresService } from './services/genres.service';

@NgModule({
  declarations: [
    AppComponent,
    TrendingMoviesComponent,
    AllMoviesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [MoviesService,GenresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
