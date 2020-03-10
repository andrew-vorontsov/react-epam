export const moviesLoaded = (newMovies: any) => {
  return {
    type: "GET_MOVIES",
    payload: newMovies
  }
}