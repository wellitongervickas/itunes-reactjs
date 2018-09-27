import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import config from '../../config';

class CollectionThumb extends Component {
  render() {

    const { result, trackCount, children } = this.props;
    const { texts } = config.lang;
    
    return (
      <div className="collection-thumb mg-bottom-40">
        <div className="intro">
          <div className="intro-thumb">
            <img src={ result.thumbBig } alt={ result.collectionName } width="100" />
          </div>
          <div className="intro-details">
            <h3 className="name hide-lg hide-md">{ result.collectionName }</h3>
            <div className="artist-tracks">{ trackCount } songs</div>
            <div className="artist-description hide-md hide-sm hide-xs">
              <h2>{ texts.editors_notes }</h2>
              <p className="mg-bottom-40">{ result.description }</p>
            </div>
          </div>
        </div>
        <div className="content">
          <h3 className="name hide-xs hide-sm">{ result.collectionName }</h3>
          { children }
        </div>
      </div>
    )
  }
}

export default withRouter(CollectionThumb);