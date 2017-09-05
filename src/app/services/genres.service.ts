import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GenresService {
  private url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=e4c75b492f15901b665f2dddfc35b81a&language=en-US';
  

  constructor(private http: Http) { }

  getGenres(){
    return this.http.get(this.url);
  }
}
