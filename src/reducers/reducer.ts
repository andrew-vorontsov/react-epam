const initialState: any = {
  data: [{
    release_date: "2018-02-07",
    genres: [],
  }],
  movie: [],
  sortBy: "release_date",
  searchBy: "title"
}

const reducer = (state: any = initialState , action: any) => {
  switch (action.type) {
    case "GET_MOVIES":
      state = {
        ...state,
        data: action.payload,
      }
      return state;
    case "GET_ONE_MOVIE":
      state = {
        ...state,
        movie: action.payload,
      }
      return state;
    case "CHANGE_SORT_BY":
      state = {
        ...state,
        sortBy: action.payload,
      }
      return state;
    case "CHANGE_SEARCH_BY":
      state = {
        ...state,
        searchBy: action.payload,
      }
      return state;
    default:
      return state;
  }
}

export default reducer;