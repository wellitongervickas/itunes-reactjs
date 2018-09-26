const INITIAL_STATE = {
  searchResults: [],
}

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return {...state, searchResults: action.payload };

    default:
      return {...state };
  }
}
