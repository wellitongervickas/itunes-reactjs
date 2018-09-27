import { all, takeLatest } from 'redux-saga/effects';

import { asyncSearchTerm } from './search';
import { asyncGetArtistById } from './artist';

export default function* root() {
  yield all([
    takeLatest('ASYNC_SEARCH_TERM', asyncSearchTerm),
    takeLatest('ASYNC_GET_ARTIST_BY_ID', asyncGetArtistById),
  ])
};
