const initialState: any = {
  data: [{
    release_date: "2018-02-07",
    genres: [],
  }],
  movie: [],
  sortBy: "release_date",
  searchBy: "title"
}

const innerSorting = (data: any, valueType: any) => {
  return data.sort((a: any, b: any) => a[valueType] > b[valueType] ? -1 : 1)
}

const reducer = (state: any = initialState , action: any) => {
  switch (action.type) {
    case "GET_MOVIES":
      state = {
        ...state,
        data: innerSorting(action.payload, state.sortBy),
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
        data: innerSorting(state.data, action.payload),
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