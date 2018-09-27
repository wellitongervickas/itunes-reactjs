import { call, put } from 'redux-saga/effects';
import { middlewareSagasUpdate } from '../middleware';
import { setRouteSagas } from '../middleware/history';
import { searchTerm } from '../../../services';
import Track from '../../../model/class/track';
import config from '../../../config';

/** 
 * @function asyncSearchTerm
 * 
 * @public
*/

export function* asyncSearchTerm(action) {

  const result = yield call(middlewareSagasUpdate, searchTerm, action.payload);
  if (result) {

    const resultsList = result.results.map(item => new Track(item));
    yield put({ type: 'SET_SEARCH_RESULTS', payload: resultsList });
    yield call(setRouteSagas, config.routesList.results);
  }
};