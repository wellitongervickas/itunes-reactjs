import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player'; //https://www.npmjs.com/package/react-player
import config from '../../config';

class SongThumb extends Component {

  state = {
    play: false,
    progress: null,
    control: false,
  }
  
  render() {

    const { result } = this.props;
    
    return (
      <div className="song-thumb mg-bottom-20" data-id={ result.artistId }>
        <div 
          className="thumb"
          onClick={ () => this.setState({ play: !this.state.play }) }
          onMouseOver={ () => this.setState({ control: true }) }
          onMouseLeave={ () => this.setState({ control: this.state.play ? true : false }) }>
          <div className={'player pointer flex flex-around-center animated ' + (this.state.control ? 'bounceIn' : 'bounceOut') }>
            <span className={ 'fas fa-' + (!this.state.play ? 'play' : 'pause') }></span>
          </div>
          <img src={ result.thumb } alt={ result.collectionName } />
        </div>
        <div className="details flex flex-column-center">
          <h3 className="name mg-bottom-10">{ result.trackName }</h3>
          <div className="artist-name">
            <NavLink to={ `${config.routesList.artist}/${result.artistId}` }>
              { result.artistName }
            </NavLink>
          </div>
          <div className="hide">
            <ReactPlayer 
              url={ result.previewUrl } 
              playing={ this.state.play } 
              onEnded={ () => this.setState({ play: false }) }
              onProgress={ e => this.setState({ progress: e }) }
            />
          </div>
        </div>
        <div className="time flex flex-column-center">
          { result.trackTime }
        </div>
      </div>  
    )
  }
}

export default SongThumb;