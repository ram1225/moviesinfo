import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { GenresService } from '../services/genres.service';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css']
})
export class TrendingMoviesComponent  implements OnInit {
  trendingMovies: any[];
  genres: any[];
  baseImageUrl = 'http://image.tmdb.org/t/p/w342';//185
  public genreData: any;

  constructor(private moviesService: MoviesService,private genresService: GenresService ) { 
   
  }

  ngOnInit(){ 
    this.moviesService.getMoviesAndGenres() 
    .subscribe(data=> {
      let movies: any = data[0].results;
      this.genres  = data[1].genres;

      this.genreData = {};
      this.genres.forEach(element => {
        this.genreData[element.id] = element.name;
      });

      this.trendingMovies= movies;
     // console.log(data);
  });

    // this.moviesService.getMovies()
    // .subscribe(response=> {
    //     this.trendingMovies= response.json().results;
    // });

    // this.genresService.getGenres()
    // .subscribe(response=>{
    //     this.genres=response.json().genres;
    // });
  }
   

}
