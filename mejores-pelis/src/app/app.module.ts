import { SharedMaterialModule } from './shared/shared-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListMovieComponent } from './views/list-movie/list-movie.component';
import { DetailsMovieComponent } from './views/details-movie/details-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMovieComponent,
    DetailsMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PerfectScrollbarModule,
    FlexLayoutModule,
    SharedModule,
    SharedMaterialModule,
  ],
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
  ],
  bootstrap: [AppComponent],
  entryComponents: [DetailsMovieComponent]
})
export class AppModule { }
