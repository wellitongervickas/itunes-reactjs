import { combineReducers } from 'redux';

import search from './search';
import loading from './loading';
import artist from './artist';

export default combineReducers({
  search,
  loading,
  artist,
});
