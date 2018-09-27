class Collection {
  constructor(props) {
    this.artistName = props.artistName;
    this.artworkUrl100 = props.artworkUrl100;
    this.collectionName = props.collectionName;
  }

  get thumb() {
    return this.artworkUrl100;
  }
};

export default Collection;
