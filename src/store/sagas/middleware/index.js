import { call } from 'redux-saga/effects';

/**
 * @function middlewareSagasUpdate
 *
 * @public
 *
*/

export function* middlewareSagasUpdate(service, payload) {
  yield call(service, payload);
};