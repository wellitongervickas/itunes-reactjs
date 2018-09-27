import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import config from '../../config';

class CollectionThumb extends Component {
  render() {

    console.log(this.props.result)

    const { result } = this.props;
    
    return (
      <div className="collection-thumb">
       <div className="thumb">
          <img src={ result.thumb } alt={ result.collectionName } width="100" />
        </div>
        <div className="details flex flex-column-center">
          <h3 className="name mg-bottom-10">{ result.collectionName }</h3>
          <div 
            onClick={ () => this.props.history.push(`${config.routesList.artist}/${result.artistId}`) }
            className="artist-name pointer">
            { result.artistName }
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CollectionThumb);