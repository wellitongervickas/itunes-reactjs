import { call, put } from 'redux-saga/effects';
import { middlewareSagasUpdate } from '../middleware';
import { setRouteSagas } from '../middleware/history';
import { searchTerm } from '../../../services';
import Track from '../../../model/class/track';

import config from '../../../config';

/** 
 * @function asyncSearchTerm
 * 
 * @param { object } action
 * @public
*/

export function* asyncSearchTerm(action) {

  const search = yield call(middlewareSagasUpdate, searchTerm, action.payload);
  if (search && search.results) {
    
    yield put({ type: 'SET_SEARCH_RESULTS', payload: search.results.map(item => new Track(item)) });
    yield call(setRouteSagas, config.routesList.results);
  }
};