import { MovieService } from './../../shared/services/movie.service';
import { Movie } from './../../shared/models/Movie';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    public _matSnackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.title = data.title;
    this.movie = data.movie;
    this.urlPoster = this._movieService.urlPoster() + this.movie.poster_path;
  }
  onLike() {
    let voto = JSON.parse(localStorage.getItem('votoEmitido'));
    let id = JSON.parse(localStorage.getItem('votoId'));
    if (voto && parseInt(id) === this.movie.id) {
      this._matSnackBar.open('Usted ya emitio su voto', '',
        {
          verticalPosition: 'top',
          horizontalPosition: 'center',
          duration: 2500,
          panelClass: ['notificacion']
        });
    } else {
      this.movie.vote_count += 1;
      localStorage.setItem('votoEmitido', "true");
      localStorage.setItem('votoId', this.movie.id.toString());
    }
  }
  ngOnInit(): void {
    console.log(this.movie.poster_path);
  }

}
