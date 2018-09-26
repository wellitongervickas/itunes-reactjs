export function _resetSearchState() {
  return {
    type: 'RESET_SEARCH_STATE',
  }
};

export function searchTerm(payload) {
  return {
    type: 'ASYNC_SEARCH_TERM',
    payload,
  }
};