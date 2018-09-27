import config from "../../config";

class Collection {
  constructor(props) {
    this.artistName = props.artistName;
    this.artworkUrl100 = props.artworkUrl100;
    this.collectionName = props.collectionName;
    this.collectionId = props.collectionId;
    this.collectionViewUrl = props.collectionViewUrl;
    this.trackCount = props.trackCount;
    this.description = config.lang.descriptions.fake_description;
    this.tracks = props.tracks || [];
  }

  get thumb() {
    return this.artworkUrl100;
  }

  get thumbBig() {

    let newSize = '1920x800cc.jpg';
    let newImage = this.artworkUrl100.split('/');
    newImage.pop();
    newImage.push(newSize);
    newImage = newImage.join('/');

    return newImage; 
  }
};

export default Collection;
