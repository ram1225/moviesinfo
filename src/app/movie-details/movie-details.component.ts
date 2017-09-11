import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'product-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  private id: number;
  private sub: any;
  private movieDetails: any ="";

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getMovieDetails(this.id);
      // In a real app: dispatch action to load the details here.
    });
  }
  getMovieDetails(movieId: number) {
    this.moviesService.getMovieDetails(movieId)
      .subscribe(res => {

        this.movieDetails=res;
        //console.log(res.budget);
      });

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}