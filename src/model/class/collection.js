import config from "../../config";
import { getThumbBig } from "../helpers/thumb";

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

    return getThumbBig(this.artworkUrl100);
  }
};

export default Collection;
