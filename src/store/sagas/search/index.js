import { call } from 'redux-saga/effects';
import { middlewareSagasUpdate } from '../middleware';
import { searchTerm } from '../../../services';

/** 
 * @function asyncSearchTerm
 * 
 * @public
*/

export function* asyncSearchTerm(action) {
  yield call(middlewareSagasUpdate, searchTerm, action.payload);
};