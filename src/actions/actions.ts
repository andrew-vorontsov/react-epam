import { types, Movie, Action, SortBy, SearchBy } from "../types";


export const getMovies = (movies: Movie[]): Action<Movie[]> => {
  return {
    type: types.GET_MOVIES,
    payload: movies
  }
}

export const getMovie = (movie: Movie[]): Action<Movie[]> => {
  return {
    type: types.GET_ONE_MOVIE,
    payload: movie
  }
}

export const changeSortBy = (sortBy: SortBy): Action<SortBy>  => {
  return {
    type: types.CHANGE_SORT_BY,
    payload: sortBy
  }
}

export const changeSearchBy = (searchBy: SearchBy): Action<SearchBy>  => {
  return {
    type: types.CHANGE_SEARCH_BY,
    payload: searchBy
  }
}