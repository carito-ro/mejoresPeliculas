import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DetailsMovieComponent } from './../details-movie/details-movie.component';
import { Movie } from './../../shared/models/Movie';
import { MovieService } from './../../shared/services/movie.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { mergeMap, catchError, takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject;
  public topMovies;
  public listMovies: Movie[] = new Array();
  public urlPoster;
  constructor(
    private _movieService: MovieService,
    public dialogo: MatDialog,
    public _matSnackBar: MatSnackBar,
  ) {
    this.urlPoster = this._movieService.urlPoster();
  }

  ngOnInit(): void {
    this.suscribeMovies();
  }
  suscribeMovies() {
    this._movieService.getMovies$()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        data => {
          this.listMovies = data.results;
        },
      );
  }
  onOpenMovie(element: Movie) {
    let datos = {
      panelClass: 'my-dialog',
      width: "50%",
      data: {
        title: 'Detalle de pelicula',
        movie: element,
      },
      autoFocus: false,
    }
    const dialogRef = this.dialogo.open(DetailsMovieComponent, datos);
  }
  /**
   * hardcode la votación. Use el storage para que no vuelta a votar
   *
   *
   * @param {Movie} element
   * @memberof ListMovieComponent
   */
  onLike(element: Movie) {
    let voto = JSON.parse(localStorage.getItem('votoEmitido'));
    if (voto) {
      this._matSnackBar.open('Usted ya emitio su voto', '',
        {
          verticalPosition: 'top',
          horizontalPosition: 'center',
          duration: 2500,
          panelClass: ['notificacion']
        });
    } else {
      element.vote_count += 1;
      localStorage.setItem('votoEmitido', "true");
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
