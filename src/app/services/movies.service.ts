import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { GlobalUrls } from './../util/Global';

@Injectable()
export class MoviesService {
  private moviesUrl = GlobalUrls.baseUrl + GlobalUrls.popularMoviesUrl + GlobalUrls.apiKey + GlobalUrls.language + GlobalUrls.page;
  private movieDetailsUrl = GlobalUrls.baseUrl + GlobalUrls.movieDetails;
  private movieSearchUrl = GlobalUrls.baseUrl + GlobalUrls.searchUrl+ GlobalUrls.apiKey + GlobalUrls.language + GlobalUrls.page+"&include_adult=false";
  
  private genresUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=e4c75b492f15901b665f2dddfc35b81a&language=en-US';
  private genres: any[];
  constructor(private http: Http) { }




  getMoviesAndGenres(pageNumber: number): Observable<any> {
    return Observable.forkJoin([
      this.http.get(this.moviesUrl + pageNumber).map(res => res.json()),
      this.http.get(this.genresUrl).map(res => res.json())
    ])
      .map((data: any[]) => {
        return data;
      });
  }

  getMovieDetails(movieId: number): Observable<any> {
    // Forming URL for fetching movie details
    return this.http
      .get(this.movieDetailsUrl + movieId + GlobalUrls.apiKey + GlobalUrls.language)
      .map(res => res.json()) ;
  }

  // temporary fetching details by search
  searchMovieDetails(query: string): Observable<any> {
    // Forming URL for fetching movie details
    return this.http
      .get(this.movieSearchUrl +"&query="+query)
      .map(res => res.json()) ;
  }
}