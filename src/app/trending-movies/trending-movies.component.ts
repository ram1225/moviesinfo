import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { GenresService } from '../services/genres.service';
import { TruncateModule } from 'ng2-truncate';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css']
})
export class TrendingMoviesComponent implements OnInit {
  defaultPageNumber = 1;
  currentlyActiveTab: string = "TRENDING MOVIES";
  trendingMovies: any[];
  genres: any[];
  baseImageUrl = 'http://image.tmdb.org/t/p/w342';//185
  public genreData: any;

  constructor(private moviesService: MoviesService, private genresService: GenresService) {

  }

  ngOnInit() {
    this.getNextPageResults(this.defaultPageNumber);
  }
  
  getNextPageResults(pageNum: number){
    this.moviesService.getMoviesAndGenres(this.defaultPageNumber)
    .subscribe(data => {
      let movies: any = data[0].results;
      this.genres = data[1].genres;

      this.genreData = {};
      this.genres.forEach(element => {
        this.genreData[element.id] = element.name;
      });

      this.trendingMovies = movies;
      // console.log(data);
    });

  }

  onClick(){
    this.defaultPageNumber++;
    this.getNextPageResults(this.defaultPageNumber);
  }


}
