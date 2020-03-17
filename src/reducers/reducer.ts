import { types, ReduxState, Action, Movie, ActionsTypes } from "../types"

const initialState: ReduxState = {
  data: [],
  movie: [],
  sortBy: "release_date",
  searchBy: "title"
}

const innerSorting = (data: Movie[], valueType: string | number): Movie[] => {
  return data.sort((a: any, b: any) => a[valueType] > b[valueType] ? -1 : 1)
}

const reducer = (state: ReduxState = initialState , action: Action<ActionsTypes>) => {
  switch (action.type) {
    case types.GET_MOVIES:
      state = {
        ...state,
        data: innerSorting(action.payload, state.sortBy),
      }
      return state;
    case types.GET_ONE_MOVIE:
      state = {
        ...state,
        movie: action.payload,
      }
      return state;
    case types.CHANGE_SORT_BY:
      state = {
        ...state,
        sortBy: action.payload,
        data: innerSorting(state.data, action.payload),
      }
      return state;
    case types.CHANGE_SEARCH_BY:
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