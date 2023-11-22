import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiMovieService } from 'src/app/services/api-movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  bannerResult: any;
  bannerTrailer: any;
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentationMovieResult: any = [];
  scienceFictionMovieResult: any = [];
  thrillerMovieResult: any = [];
  constructor(private apiMovie: ApiMovieService) {}
  ngOnInit() {
    this.getBannerMovie();
    this.getTrendingMovie();
    this.getActionMovie();
    this.getAdventureMovie();
    this.getAnimationMovie();
    this.getComedyMovie();
    this.getDocumentaryMovie();
    this.scienceFictionMovieResult();
    this.thrillerMovieResult();

    this.getBannerMovie();

    // console.log(this.bannerTrailer['id']);
  }

  ngAfterViewInit() {
    this.getBannerTrailer();
  }

  getBannerTrailer() {
    this.apiMovie
      .getTrailerMovie(this.bannerResult['id'])
      .subscribe((result) => {
        result.results.forEach((item: any) => {
          if (item.type == 'Trailer') {
            this.bannerTrailer = item.key;
          }
        });
      });
  }
  getBannerMovie() {
    this.apiMovie.getBannerMovie().subscribe((result) => {
      this.bannerResult = result.results[0];
      console.log(this.bannerResult);
    });
  }

  getTrendingMovie() {
    this.apiMovie.getTrendingMovie().subscribe((result) => {
      this.trendingMovieResult = result.results;
      // console.log(this.trendingMovieResult);
    });
  }

  getActionMovie() {
    this.apiMovie.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }

  getAdventureMovie() {
    this.apiMovie.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }

  getAnimationMovie() {
    this.apiMovie.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }

  getComedyMovie() {
    this.apiMovie.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }

  getDocumentaryMovie() {
    this.apiMovie.fetchDocumentaryMovies().subscribe((result) => {
      this.documentationMovieResult = result.results;
    });
  }

  getScienceMovie() {
    this.apiMovie.fetchScienceFictionMovies().subscribe((result) => {
      this.scienceFictionMovieResult = result.results;
    });
  }

  getThirllerMovie() {
    this.apiMovie.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }
}
