export const moviesLoaded = (newMovies: any) => {
  return {
    type: "GET_MOVIES",
    payload: newMovies
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