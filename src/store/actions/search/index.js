export function searchTerm(payload) {
  return {
    type: 'ASYNC_SEARCH_TERM',
    payload,
  }
};