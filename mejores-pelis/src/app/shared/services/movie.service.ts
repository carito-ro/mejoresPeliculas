import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Top_rated } from '../models/Top_rated';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public api_key: string;
  public routeTopMovie: string;
  public ruoterPoster: string;
  constructor(private _httpCliente: HttpClient) {
    this.api_key = 'api_key=c5f9afcaea63aca68e2ea477fea4fdf1&language=es-AR';
    this.routeTopMovie = '3/movie/top_rated?';
    this.ruoterPoster = 't/p/w500'
  }
  getMovies$(): Observable<Top_rated> {
    let url = environment.base_url + this.routeTopMovie + this.api_key;
    return this._httpCliente.get<Top_rated>(url);
  }
  urlPoster(): string {
    let url = environment.image_url + this.ruoterPoster;
    console.log(url);
    return url;
  }

  makeLike() {

  }
}


