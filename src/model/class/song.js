class Song {
  constructor(props) {
    this.artistId = props.artistId;
    this.artistName = props.artistName;
    this.collectionName = props.collectionName;
    this.previewUrl = props.previewUrl;
    this.primaryGenreName = props.primaryGenreName;
    this.artworkUrl100 = props.artworkUrl100;
    this.trackCensoredName = props.trackCensoredName;
    this.trackName = props.trackName;
    this.trackTimeMillis = props.trackTimeMillis;
  }

  get thumb() {
    return this.artworkUrl100;
  }

  get trackTime() {
    return (this.trackTimeMillis / 60000).toFixed(2);
  }
};

export default Song;
