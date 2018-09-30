import { call, put } from 'redux-saga/effects';
import { middlewareSagasUpdate } from '../middleware';

import { 
  getArtistRelated,
  getArtistById, 
  getArtistCollections, 
  getTracksByCollectionId  
} from '../../../services';

import Artist from '../../../model/class/artist';
import Track from '../../../model/class/track';
import Collection from '../../../model/class/collection';

/** 
 * @function asyncGetArtistById
 * 
 * @param { object } action
 * @public
*/

export function* asyncGetArtistById(action) {

  const artistDetails = yield call(middlewareSagasUpdate, getArtistById, action.payload);
  if (artistDetails && artistDetails.results) {

    // Find artist details
    const artist = artistDetails.results.find(item => item.wrapperType === 'artist');
    yield put({ type: 'SET_ARTIST_DETAILS', payload: new Artist(artist) });

    yield call(getArtistRelatedByGenre, artist.primaryGenreName);
    yield call(getCollectiosByArtistId, artist.artistId);
    
  }
};


/**
 * @function getCollectiosByArtistId
 * 
 * @param { Number } id
 * @private
*/

function* getCollectiosByArtistId(id) {

  const artistCollections = yield call(middlewareSagasUpdate, getArtistCollections, id);
  if (artistCollections) {

    // Get only collections wrapper type 'colletction'
    let collections = artistCollections.results.filter(item => item.wrapperType === 'collection');
    collections = collections.map(item => new Collection(item));
    
    // Get tracks by collection id
    for (let collection of collections) {

      let collectionsTracks = yield call(middlewareSagasUpdate, getTracksByCollectionId, collection.collectionId);
      let tracks = collectionsTracks.results.filter(item => item.wrapperType === 'track');
      collection.tracks = tracks.map(item => new Track(item));     
    }

    // Get Artist Background
    yield call(setArtistBackground, collections);
    yield put({ type: 'SET_ARTIST_COLLECTIONS', payload: collections });
  }
};

/**
 * @function setArtistBackground
 * 
 * @param { array } collections
 * @private
*/

function* setArtistBackground(collections) {
  const background = collections[0] && collections[0].tracks[0] ? collections[0].tracks[0].thumbBig : null;
  if (background) {
    yield put({ type: 'SET_ARTIST_BACKGROUND', payload: background });
  }
}

/**
 * @function getArtistRelatedByGenre
 * 
 * @param { string } genre
 * @private
*/

function* getArtistRelatedByGenre(genre) {
  if (genre) {
    const related = yield call(middlewareSagasUpdate, getArtistRelated, genre );
    yield put({ type: 'SET_ARTIST_RELATED', payload: related.results.map(item => new Artist(item)) });
  }
};