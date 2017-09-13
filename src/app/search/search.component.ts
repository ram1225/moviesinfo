import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MoviesService } from '../services/movies.service';

import { GlobalUrls } from './../util/Global';
import { Observable, Subject } from 'rxjs';
import { FormsModule, FormControl, ReactiveFormsModule }   from '@angular/forms';

@Component({
  selector: 'movie-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() results: Observable<any>;
  @Output() searchEvent: EventEmitter<any> = new EventEmitter();
  baseImageUrl = GlobalUrls.thumbnail;
  //private searchTerms = new Subject<string>();
  private searchInput = new FormControl();

  constructor() { 
     this.searchInput
    .valueChanges
    .debounceTime(200)
    .distinctUntilChanged()
  //  .switchMap(term => this.moviesService.searchMovieDetails(query))
    .subscribe((event) => this.searchEvent.emit(event));
  }

  

  ngOnInit() {
   // this.getMovieSearchResults();
  }

  // getMovieSearchResults(query: string) {
  //   // this.moviesService.searchMovieDetails()
  //   this.searchTerms
  //     .debounceTime(300)
  //     .distinctUntilChanged()
  //   //  .switchMap(term => this.moviesService.searchMovieDetails(query))
  //     .subscribe((event) => this.searchEvent.emit(event));
  // }
}
