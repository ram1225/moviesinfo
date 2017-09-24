import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { GlobalUrls } from './../util/Global';


@Component({
  selector: 'product-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  public id: number;
  public sub: any;
  public movieDetails: any = "";
  public baseImageUrl = GlobalUrls.baseImageUrl;
  public image = '';
  public offset = 1000;

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
        this.movieDetails = res;
        this.image = GlobalUrls.backdropImage + this.movieDetails.backdrop_path;
        console.log(this.image);
      });

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}