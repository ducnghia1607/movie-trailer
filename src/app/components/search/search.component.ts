import { Component, OnInit, Input } from '@angular/core';
import { ApiMovieService } from 'src/app/services/api-movie.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  movieList: any = [];
  nameMovie!: string;
  constructor(
    private apiMovieService: ApiMovieService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.nameMovie.subscribe((data) => {
      this.nameMovie = data;
      console.log(this.nameMovie, 'nameMovie');
      this.getMovieBySearch();
    });
  }

  getMovieBySearch() {
    this.apiMovieService.getSearchMovie(this.nameMovie).subscribe((data) => {
      console.log(data.results, '#data ');
    });
  }
}
