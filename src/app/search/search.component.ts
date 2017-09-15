import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MoviesService } from '../services/movies.service';

import { GlobalUrls } from './../util/Global';
import { Observable, Subject } from 'rxjs';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'movie-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() results: Observable<any>;
  @Output() searchEvent: EventEmitter<any> = new EventEmitter();
  private baseImageUrl = GlobalUrls.thumbnail;
  //private searchTerms = new Subject<string>();
  private searchInput = new FormControl();
  private  isClassVisible: boolean= true;
  private broadcastedNumberToHideAndShowDivInCss=0;
  //searchValue='';
  //searchBox='';

  constructor() {
    this.searchInput
      .valueChanges
      .debounceTime(200)
      .distinctUntilChanged()
      //  .switchMap(term => this.moviesService.searchMovieDetails(query))
      .subscribe((event) => {
        this.isClassVisible=false;
        this.searchEvent.emit(event)});

     // this.edit = true;
  }


  autoCloseForDropdownResults(event) {
    var target = event.target;
    if (!target.closest("#search")) {
    
     // console.log("Test");
      this.isClassVisible=true;
      
      // clearing input area 
     // this.searchBox.value=' ';
    }
  }
  ngOnInit() {
    // this.getMovieSearchResults();
  }

  
}
