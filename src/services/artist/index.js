import config from '../../config';
import middleware from '../middleware';

const { url, search } = config.api;

/**
 * @function getArtistById
 * 
 * This funcion will return
 * a single artist by ID
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
 * This function will return
 * latest 3 collections by artist ID
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
 * This function will return
 * lastest 5 tracks by artist ID
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
 * This function will return 
 * latest 4 tracks by collection ID
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
 * This function will return a
 * fake related artist
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