import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiMovieService } from 'src/app/services/api-movie.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css'],
})
export class MoviedetailComponent implements OnInit {
  movieId: any;
  movie: any;
  castMovie: any;
  trailerMovie: any;
  constructor(
    private route: ActivatedRoute,
    private apiMovie: ApiMovieService
  ) {}
  ngOnInit() {
    this.movieId = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params);
    // this.route.params.subscribe((params) => {
    //   console.log(params);
    //   this.movieId = params['id'];
    // });
    this.getMovieById();
    this.getCastMovie();
    this.getTrailerMovie();
  }

  getMovieById() {
    this.apiMovie.getMovieDetails(this.movieId).subscribe((result: any) => {
      this.movie = result;
    });
  }

  getCastMovie() {
    this.apiMovie.getCastMovie(this.movieId).subscribe((result) => {
      console.log(result, '#cast movie');
      this.castMovie = result.cast;
      // this.castMovie = result;
    });
  }

  getTrailerMovie() {
    this.apiMovie.getTrailerMovie(this.movieId).subscribe((result) => {
      result.results.forEach((item: any) => {
        if (item.type === 'Trailer') {
          this.trailerMovie = item.key;
        }
      });
    });
  }
}
