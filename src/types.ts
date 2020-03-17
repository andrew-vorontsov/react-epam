export const types = {
  GET_MOVIES: "GET_MOVIES",
  GET_ONE_MOVIE: "GET_ONE_MOVIE",
  CHANGE_SORT_BY: "CHANGE_SORT_BY",
  CHANGE_SEARCH_BY: "CHANGE_SEARCH_BY"
}

export interface Data {
  data: Movie[];
  total:	number;
  offset:	number;
  limit:	number;
}

export type SearchBy = "title" | "genres";

export type SortBy = "release_date" | "vote_average";

export type ActionsTypes = Movie[] & SortBy & SearchBy;

export interface ReduxState {
  data: Movie[];
  movie: Movie[];
  sortBy: SortBy;
  searchBy: SearchBy;
}

export interface Action<T> {
  type: string;
  payload: T;
}

export interface Movie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number;
  genres: string[];
}