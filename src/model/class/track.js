import { getThumbBig } from "../helpers/thumb";

class Track {
  constructor(props) {
    this.artistId = props.artistId;
    this.artistName = props.artistName;
    this.collectionName = props.collectionName;
    this.previewUrl = props.previewUrl;
    this.primaryGenreName = props.primaryGenreName;
    this.artworkUrl60 = props.artworkUrl60;
    this.trackCensoredName = props.trackCensoredName;
    this.trackName = props.trackName;
    this.trackTimeMillis = props.trackTimeMillis;
  }

  get thumb() {
    return this.artworkUrl60;
  }

  get thumbBig() {
    return getThumbBig(this.artworkUrl60);
  }

  get trackTime() {
    return (this.trackTimeMillis / 60000).toFixed(2);
  }
};

export default Track;
