import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as artistActions from '../../../store/actions/artist';

import { /*TrackThumb,*/ CollectionThumb } from '../../../components';
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

    const { texts, /*warnings,*/ descriptions } = config.lang;
    const { artistDetails, artistCollections, artistBackground } = this.props;

    if (artistDetails) {
      return (
        <div className="artist">
          { artistBackground && 
            <div style={{ backgroundImage: `url(${artistBackground})` }} className="artist-thumb"></div>
          }
          <div className="artist-content container">
            <h1 className="mg-bottom-20">{ artistDetails.artistName }</h1>

            <div className="artist-info mg-bottom-40">
              <div className="artist-description">
                <p>{ descriptions.fake_description }</p>
              </div>
              <div className="artist-details">
                <h4 className="mg-bottom-10">Genre</h4>
                <p>{ artistDetails.primaryGenreName }</p>
              </div>
            </div>
            
            <div className="artist-list mg-bottom-40 grid">
              { artistCollections && artistCollections.length > 0 && 
                artistCollections.map((item, index) => 

                <CollectionThumb  trackCount={ item.trackCount } key={ index } result={ item }>
                  {/* <h1 className="mg-bottom-20">{ artistDetails.collectionName }</h1>
                  <div className="artist-listen">
                    <a target="_blank" href={ item.collectionViewUrl } className="artist-listen-btn">
                      Listen on <b>Apple Music</b>
                      <span className="fas fa-external-link-alt"></span>
                    </a>
                  </div>

                  <div className="artist-description hide-md hide-lg">
                    <h2>{ texts.editors_notes }</h2>
                    <p className="mg-bottom-40">{ item.description }</p>
                  </div>

                  <div className="artist-list grid">
                    { item.tracks && item.tracks.length ?
                      item.tracks.map((item, index) => 
                      <TrackThumb key={ index } result={ item } /> ) : warnings.empty_list
                    }
                  </div> */}
                </CollectionThumb>
                
              )}
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
  artistBackground: state.artist.artistBackground,
});

const mapDispatchToProps = dispatch => bindActionCreators(artistActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Artist);