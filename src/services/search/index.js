import config from '../../config';
import middleware from '../middleware';

const { url, search } = config.api;

/**
 * @function searchTerm
 * 
 * Fixed to return only
 * songs results
 *
 * @public
 *
*/

export function searchTerm(term) {

  const route = `${url}${search.term}${encodeURIComponent(term)}&entity=song`;
  
  return middleware.requestAxios().get(route)
  .then(res => res).catch(e => e);
};


