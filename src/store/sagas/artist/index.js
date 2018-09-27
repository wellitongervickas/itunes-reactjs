import { call, put } from 'redux-saga/effects';
import { middlewareSagasUpdate } from '../middleware';
import { getArtistById, getArtistCollections, getTracksByCollectionId  } from '../../../services';
import Artist from '../../../model/class/artist';
import Track from '../../../model/class/track';
import Collection from '../../../model/class/collection';

/** 
 * @function asyncGetArtistById
 * 
 * @public
*/

export function* asyncGetArtistById(action) {

  const artistDetails = yield call(middlewareSagasUpdate, getArtistById, action.payload);
  if (artistDetails && artistDetails.results) {

    // Find artist details
    const artist = artistDetails.results.find(item => item.wrapperType === 'artist');
    yield put({ type: 'SET_ARTIST_DETAILS', payload: new Artist(artist) });
     
    // Get collections by artist id
    const artistCollections = yield call(middlewareSagasUpdate, getArtistCollections, action.payload);
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

      yield put({ type: 'SET_ARTIST_COLLECTIONS', payload: collections });

      // Get a random picture to set on background artist page
      const background = collections[0].tracks[0].thumbBig;
      if (background) {
        yield put({ type: 'SET_ARTIST_BACKGROUND', payload: background });
      }
    }
  }
};
