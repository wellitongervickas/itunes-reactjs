import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import config from '../../config';
import { TrackThumb } from '../../components';

class CollectionThumb extends Component {

  renderDescription(style) {

    const { result } = this.props;
    const { texts } = config.lang;
    
    return (
      <div className={ 'content-editors-note mg-bottom-40 ' + style }>
        <h2>{ texts.editors_notes }</h2>
        <p>{ result.description }</p>
      </div>
    )
  }
  
  render() {

    const { result, trackCount } = this.props;
    const { texts, warnings } = config.lang;
    
    return (
      <div className="collection-thumb mg-bottom-40">
        <div className="intro mg-bottom-40">
          <div className="thumb">
            <img src={ result.thumbBig } alt={ result.collectionName } width="100" />
          </div>
          <div className="details">
            <h3 className="details-name hide-lg hide-md">{ result.collectionName }</h3>
            <div className="details-track-counts">{ trackCount } { texts.songs }</div>
            { this.renderDescription('hide-xs mg-top-40') }
          </div>
        </div>
        <div className="content">
          <h3 className="details-name hide-xs hide-sm mg-bottom-20">{ result.collectionName }</h3>
          <div className="content-listen-on mg-bottom-40">
            <a target="_blank" href={ result.collectionViewUrl }>
              Listen on <b>Apple Music</b>
              <span className="fas fa-external-link-alt"></span>
            </a>
          </div>
          { this.renderDescription('hide-lg hide-md hide-sm') }
          <div className="content-tracks">
            { result.tracks && result.tracks.length ?
              result.tracks.map((item, index) => 
              <TrackThumb key={ index } result={ item } /> ) : warnings.empty_list
            }
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CollectionThumb);