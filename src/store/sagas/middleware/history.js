import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

/**
 * @function setRouteSagas
 *
 * @param { string } route
 * @public
 *
*/

export function* setRouteSagas(route) {
  if (route) {
    yield put(push(route));
  }
};
