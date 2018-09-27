const INITIAL_STATE = {
  artistDetails: null,
  artistCollections: [],
  artistTracks: [],
}

export default function artist(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'RESET_ARTIST_STATE':
      return INITIAL_STATE;
    
    case 'SET_ARTIST_DETAILS':
      return {...state, artistDetails: action.payload };
    
    case 'SET_ARTIST_COLLECTIONS':
      return {...state, artistCollections: action.payload };

    case 'SET_ARTIST_TRACKS':
      return {...state, artistTracks: action.payload };

    default:
      return {...state };
  }
}
