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
  const request = yield call(service, payload);
  yield put(setLoadingStatus(false));

  if((request && request.status) && (request.status <= 299 && request.status >= 200)) {
    return request && request.data ? request.data : request;
  } else {
    return null;
  }
};