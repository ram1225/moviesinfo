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
export class SearchComponent  {
  @Input() results: Observable<any>;
  @Output() searchEvent: EventEmitter<any> = new EventEmitter();
  public baseImageUrl = GlobalUrls.thumbnail;
  public searchInput = new FormControl();
  public  isClassVisible: boolean= true;
  public broadcastedNumberToHideAndShowDivInCss=0;


  constructor() {
    this.searchInput
      .valueChanges
      .debounceTime(200)
      .distinctUntilChanged()
       .subscribe((event) => {
        this.isClassVisible=false;
        this.searchEvent.emit(event)});

  }


  autoCloseForDropdownResults(event) {
    var target = event.target;
    if (!target.closest("#search")) {
    
      this.isClassVisible=true;

    }
  }
 

  
}
