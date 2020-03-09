const initialState: any = {
  data: ["Hello"]
}

const reducer = (state: any = initialState , action: any) => {
  switch (action.type) {
    case "GET_MOVIES":
      state = {
        data: action.payload
      }
      return state;
    default:
      return state;
  }
}

export default reducer;