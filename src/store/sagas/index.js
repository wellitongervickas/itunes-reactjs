import { all, takeLatest } from 'redux-saga/effects';

import { asyncSearchTerm } from './search';

export default function* root() {
  yield all([
    takeLatest('ASYNC_SEARCH_TERM', asyncSearchTerm),
  ])
};
