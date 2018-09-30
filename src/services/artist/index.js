import config from '../../config';
import middleware from '../middleware';

const { url, search } = config.api;

/**
 * @function getArtistById
 *
 * @param { Number } id
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
 * @param { Number } id
 * @public
 *
*/

export function getArtistCollections(id) {

  const route = `${url}${search.artist}${id}&entity=album&limit=3`;
  return middleware.requestAxios().get(route)
  .then(res => res).catch(e => e);
};

/**
 * @function getArtistTracks
 * 
 * @param { Number } id
 * @public
 *
*/

export function getArtistTracks(id) {

  const route = `${url}${search.artist}${id}&entity=song&limit=5`;
  return middleware.requestAxios().get(route)
  .then(res => res).catch(e => e);
};

/**
 * @function getTracksByCollectionId
 * 
 * @param { Number } id
 * @public
 *
*/

export function getTracksByCollectionId(id) {

  const route = `${url}${search.artist}${id}&entity=song&limit=4`;
  return middleware.requestAxios().get(route)
  .then(res => res).catch(e => e);
};


/**
 * @function getArtistRelated
 * 
 * @param { string } term
 * @public
 *
*/

export function getArtistRelated(term) {

  const route = `${url}${search.term}${encodeURIComponent(term)}&limit=4&entity=song&sort=recent`;
  return middleware.requestAxios().get(route)
  .then(res => res).catch(e => e);
};