export function _resetArtistState() {
  return {
    type: 'RESET_ARTIST_STATE',
  }
};

export function getArtistById(id) {
  return {
    type: 'ASYNC_GET_ARTIST_BY_ID',
    payload: id,
  }
};