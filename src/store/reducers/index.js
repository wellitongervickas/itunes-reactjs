import { combineReducers } from 'redux';

import search from './search';
import loading from './loading';

export default combineReducers({
  search,
  loading,
});
