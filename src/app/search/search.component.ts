import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'movie-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovieSearchResults();
  }

  getMovieSearchResults(){
   // this.moviesService.searchMovieDetails()
  }
}
