import config from '../../config';
import middleware from '../middleware';

const { url, search } = config.api;

/**
 * @function getArtistById
 * 
 *
 * @public
 *
*/

export function getArtistById(id) {

  const route = `${url}${search.artist}${id}`;
  
  return middleware.requestAxios().get(route)
  .then(res => res).catch(e => e);
};

/**
 * @function getArtistCollections
 * 
 *
 * @public
 *
*/

export function getArtistCollections(id) {

  const route = `${url}${search.artist}${id}&entity=album&limit=2`;

  return middleware.requestAxios().get(route)
  .then(res => res).catch(e => e);
};

/**
 * @function getArtistTracks
 * 
 *
 * @public
 *
*/

export function getArtistTracks(id) {

  const route = `${url}${search.artist}${id}&entity=song&limit=10`;
  
  return middleware.requestAxios().get(route)
  .then(res => res).catch(e => e);
};