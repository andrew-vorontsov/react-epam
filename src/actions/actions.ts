export const getMovies = (newMovies: any) => {
  return {
    type: "GET_MOVIES",
    payload: newMovies
  }
}

export const getOneMovie = (movie: any) => {
  return {
    type: "GET_ONE_MOVIE",
    payload: movie
  }
}

export const changeSortBy = (sort: any) => {
  return {
    type: "CHANGE_SORT_BY",
    payload: sort
  }
}

export const changeSearchBy = (searchBy: any) => {
  return {
    type: "CHANGE_SEARCH_BY",
    payload: searchBy
  }
}