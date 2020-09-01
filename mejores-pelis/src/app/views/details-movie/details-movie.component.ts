import { MovieService } from './../../shared/services/movie.service';
import { Movie } from './../../shared/models/Movie';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.scss']
})
export class DetailsMovieComponent implements OnInit {
  public movie: Movie;
  public title; string;
  public urlPoster: string;
  constructor(
    private _movieService: MovieService,
    public dialogRef: MatDialogRef<DetailsMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.title = data.title;
    this.movie = data.movie;
    this.urlPoster = this._movieService.urlPoster() + this.movie.poster_path;
  }

  ngOnInit(): void {

    console.log(this.movie.poster_path);
  }

}
