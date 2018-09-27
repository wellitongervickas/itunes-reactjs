import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as artistActions from '../../../store/actions/artist';

import { CollectionThumb, ArtistThumb } from '../../../components';
import config from '../../../config';

class Artist extends Component {

  state = {
    artistId: null,
  }

  componentWillMount() {
    
    // Reset Artist State
    this.props._resetArtistState();

    if(this.props.match.params.id) {
      this.props.getArtistById(this.props.match.params.id);
    } else {
      this.props.history.push(config.routesList.introduction);
    }
  }

  componentDidUpdate() {
    if (this.props.artistDetails) {
      if (Number(this.props.artistDetails.artistId) !== Number(this.props.match.params.id)) {
        this.props.getArtistById(this.props.match.params.id);
      }
    }
  }

  render() {

    const { texts, descriptions } = config.lang;
    const { artistDetails, artistCollections, artistBackground, artistRelated } = this.props;

    if (artistDetails) {
      return (
        <div className="artist">
          { artistBackground && 
            <div style={{ backgroundImage: `url(${artistBackground})` }} className="artist-background"></div>
          }
          <div className="artist-content container grid">
            <h1 className="mg-bottom-0">{ artistDetails.artistName }</h1>

            <div className="artist-info mg-bottom-40">
              <div className="artist-description">
                <p>{ descriptions.fake_description }</p>
              </div>
              <div className="artist-details">
                <h4 className="mg-bottom-10">Genre</h4>
                <p>{ artistDetails.primaryGenreName }</p>
              </div>
            </div>
            
            <div className="artist-list mg-bottom-40 mg-top-40 grid">
              { artistCollections && artistCollections.length > 0 && 
                artistCollections.map((item, index) => <CollectionThumb  trackCount={ item.trackCount } key={ index } result={ item } /> )}
            </div>

            <div className="artist-related mg-bottom-40 mg-top-40 grid grid-lg-4 grid-md-3 grid-sm-2 grid-xs-2">
              { artistRelated && artistRelated.length > 0 && 
                artistRelated.map((item, index) => <ArtistThumb key={ index } result={ item } /> )}
            </div>
            
            <div className="artist-actions btn-control text-center mg-top-20 mg-bottom-20">
              <button
                className="btn"
                onClick={ () => this.props.history.push( config.routesList.introduction ) }>
                { texts.back }
              </button>
            </div>
          </div>
        </div>
      )
    }

    return null;
  }
};

const mapStateToProps = state => ({
  artistDetails: state.artist.artistDetails,
  artistCollections: state.artist.artistCollections,
  artistBackground: state.artist.artistBackground,
  artistRelated: state.artist.artistRelated,
});

const mapDispatchToProps = dispatch => bindActionCreators(artistActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Artist);