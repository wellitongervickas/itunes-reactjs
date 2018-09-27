import { call, put } from 'redux-saga/effects';
import { middlewareSagasUpdate } from '../middleware';
import { getArtistById, getArtistCollections, getArtistTracks  } from '../../../services';
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

    const artist = artistDetails.results.find(item => item.wrapperType === 'artist');
    const artistCollections = yield call(middlewareSagasUpdate, getArtistCollections, action.payload);
    const artistTracks = yield call(middlewareSagasUpdate, getArtistTracks, action.payload);

    yield put({ type: 'SET_ARTIST_DETAILS', payload: new Artist(artist) });

    if (artistCollections) {

      let collections = artistCollections.results.filter(item => item.wrapperType === 'collection');
      collections = collections.map(item => new Collection(item));

      yield put({ type: 'SET_ARTIST_COLLECTIONS', payload: collections });
    }

    if (artistTracks) {
      let tracks = artistTracks.results.filter(item => item.wrapperType === 'track');
      tracks = tracks.map(item => new Track(item));

      yield put({ type: 'SET_ARTIST_TRACKS', payload: tracks });
    }
  }
};
