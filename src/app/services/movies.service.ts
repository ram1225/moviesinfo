import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class MoviesService {
  private moviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=e4c75b492f15901b665f2dddfc35b81a&language=en-US&page=1';
  private genresUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=e4c75b492f15901b665f2dddfc35b81a&language=en-US';
  private genres: any[];
  constructor(private http: Http) { }


  getMovies(){
    return this.http.get(this.moviesUrl);
   
  }

  getMoviesAndGenres(): Observable<any> {
    return Observable.forkJoin([
      this.http.get(this.moviesUrl).map(res => res.json()),
      this.http.get(this.genresUrl).map(res => res.json())
    ])
    .map((data: any[]) => {
      return data;
    });
  }
}

// for(let i=0;i<movies.length;i++){
//   for(let j=0;j<movies[i].genre_ids.length;j++){
    
//     for(let k=0;k<genres.length;k++){
//       if(movies[i].genre_ids[j]==genres[k].id){
//         movies[i].genre_ids[j]=genres[k].name;
//         console.log(genres[k].name);
//       }
//     }
//   }
// }