import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { GenresService } from '../services/genres.service';
import { TruncateModule } from 'ng2-truncate';
import { GlobalUrls } from './../util/Global';
import { SearchComponent } from './../search/search.component';


import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/Rx';
import { Http } from '@angular/http';

import { Result } from './../models/Result';
import { Genre } from './../models/Genres';
import { MovieObject } from './../models/MovieObject';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css']
})
export class TrendingMoviesComponent  implements OnInit {
  defaultPageNumber = 1;
  totalMovieResults = 1;
  currentlyActiveTab: string = "TRENDING MOVIES";
  trendingMovies: Result[];
  genres: Genre[];
  baseImageUrl = GlobalUrls.baseImageUrl; //'http://image.tmdb.org/t/p/w342';//185
  public genreData: any;
  public dataObserver: Observer<string>;

  public data: Observable<any>;
  public movieSearchUrl = GlobalUrls.baseUrl + GlobalUrls.searchUrl + GlobalUrls.apiKey + GlobalUrls.language + GlobalUrls.page + "&include_adult=false";

  constructor(private moviesService: MoviesService, private genresService: GenresService, private http: Http) {
    
    this.data = new Observable(observer => this.dataObserver = observer);
    
  }

  ngOnInit() {
    this.getNextPageResults(this.defaultPageNumber);
  }

  getNextPageResults(pageNum: number) {
    this.moviesService.getMoviesAndGenres(this.defaultPageNumber)
      .subscribe(data => {
        this.totalMovieResults = data[0].total_results;
      //  let movies: any = data[0].results;
       let movies: MovieObject= new MovieObject(data[0].page,data[0].total_results, data[0].total_pages, data[0].results);
        this.genres = data[1].genres;

        this.genreData = {};
        this.genres.forEach(element => {
          this.genreData[element.id] = element.name;
        });

        this.trendingMovies = movies.results;
        //console.log(this.totalMovieResults);
      });

  }


  mouseEnter(event,index){
 
   let srcObj=event.currentTarget.offsetParent.children[index].childNodes["5"];
    
    if(srcObj.getAttribute("class")=="view_more"){
     srcObj.setAttribute("style","display:block"); 
    }
  }
    
  mouseLeave(event,index){
    let srcObj=event.currentTarget.offsetParent.children[index].childNodes["5"];
    if(srcObj.getAttribute("class")=="view_more"){
     srcObj.setAttribute("style","display:none");
    }
  }

  onClick() {
    this.defaultPageNumber++;
    this.getNextPageResults(this.defaultPageNumber);
    window.scrollTo(0, 0);
  }
  onPreviousClick() {
    this.defaultPageNumber--;
    this.getNextPageResults(this.defaultPageNumber);
    window.scrollTo(0, 0);
  }

  // temporary fetching details by search
  searchMovieDetails(event) {
    // Forming URL for fetching movie details
 
    return this.http
      .get(this.movieSearchUrl + "&query=" + event)
      .map(res => {
        // console.log(res.json().results);
        if(res.json().results.total_pages>=1){
         
        }
        return res.json().results;
      })
      .subscribe(result => {
        this.dataObserver.next(result);
      }, error => console.log('Could not load artists'));
  }

}
