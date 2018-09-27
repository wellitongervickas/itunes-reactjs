class Collection {
  constructor(props) {
    this.artistName = props.artistName;
    this.artworkUrl100 = props.artworkUrl100;
    this.collectionName = props.collectionName;
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
