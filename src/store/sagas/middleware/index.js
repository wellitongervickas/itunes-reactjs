import { call, put } from 'redux-saga/effects';
import { setLoadingStatus } from '../../actions/loading';

/**
 * @function middlewareSagasUpdate
 *
 * @public
 *
*/

export function* middlewareSagasUpdate(service, payload) {

  yield put(setLoadingStatus(true));
  const result = yield call(service, payload);

  yield put(setLoadingStatus(false));
  return result && result.data ? result.data : result;
};