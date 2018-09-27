class Artist {
  constructor(props) {
    this.artistName = props.artistName;
    this.primaryGenreName = props.primaryGenreName;
    this.artistId = props.artistId;
    this.artworkUrl100 = props.artworkUrl100 || null;
  }
};

export default Artist;
