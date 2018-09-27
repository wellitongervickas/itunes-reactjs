import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as artistActions from '../../../store/actions/artist';

import { TrackThumb, CollectionThumb } from '../../../components';
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

    const { texts, warnings, descriptions } = config.lang;
    const { artistDetails, artistTracks, artistCollections } = this.props;
    const background = artistTracks.find(item => item.artistName === artistDetails.artistName);

    if (artistDetails) {
      return (
        <div className="artist">
          { background && 
            <div style={{ backgroundImage: `url(${background.thumbBig})` }} className="artist-thumb"></div>
          }
          <div className="artist-content">
            <h1 className="mg-bottom-20">{ artistDetails.artistName }</h1>
            <p className="artist-description mg-bottom-40">{ descriptions.fake_description }</p>
            <div className="artist-list grid grid-lg-4 grid-md-3 grid-sm-2 grid-xs-1">
              { artistCollections && artistCollections.length ?
                artistCollections.map((item, index) => <CollectionThumb key={ index } result={ item } /> ) : warnings.empty_list
              }
            </div>
            <h2>{ texts.editors_notes }</h2>
            <p className="artist-description mg-bottom-40">{ descriptions.fake_description }</p>
            <div className="artist-list grid grid-lg-4 grid-md-3 grid-sm-2 grid-xs-1">
              { artistTracks && artistTracks.length ?
                artistTracks.map((item, index) => <TrackThumb key={ index } result={ item } /> ) : warnings.empty_list
              }
            </div>
            <div className="artist-actions btn-control text-center mg-top-20 mg-bottom-20">
              <button
                className="btn"
                onClick={ () => this.props.history.goBack() }>
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
  artistTracks: state.artist.artistTracks,
});

const mapDispatchToProps = dispatch => bindActionCreators(artistActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Artist);