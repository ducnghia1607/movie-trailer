import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiMovieService {
  baseurl = 'https://api.themoviedb.org/3';
  apikey = '08cc33bd5ae3a747598ce2ad84376e66';
  constructor(private http: HttpClient) {}

  getMovieDetails(data: any): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/${data}?api_key=${this.apikey}`
    );
  }

  getBannerMovie(): Observable<any> {
    return this.http.get<any>(
      `${this.baseurl}/trending/all/week?api_key=${this.apikey}`
    );
  }
  getTrendingMovie(): Observable<any> {
    return this.http.get<any>(
      `${this.baseurl}/trending/movie/day?api_key=${this.apikey}`
    );
  }

  getCastMovie(data: any): Observable<any> {
    return this.http.get<any>(
      `${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`
    );
  }

  getTrailerMovie(data: any): Observable<any> {
    return this.http.get<any>(
      `${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`
    );
  }

  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.http.get(
      `${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`
    );
  }

  // action
  fetchActionMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`
    );
  }

  // adventure
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`
    );
  }

  // animation
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`
    );
  }

  // comedy
  fetchComedyMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`
    );
  }

  // documentary
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`
    );
  }

  // science-fiction:878

  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`
    );
  }

  // thriller:53
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`
    );
  }
}
