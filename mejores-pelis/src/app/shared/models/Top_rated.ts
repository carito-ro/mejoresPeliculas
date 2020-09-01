import { Movie } from './Movie';
export interface Top_rated {
  page: number,
  total_results: number,
  total_pages: number,
  results: Movie[],

}
