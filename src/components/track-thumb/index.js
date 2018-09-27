import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactPlayer from 'react-player'; //https://www.npmjs.com/package/react-player
import config from '../../config';

class TrackThumb extends Component {

  state = {
    play: false,
    progress: null,
    control: false,
  }
  
  render() {

    const { result } = this.props;
    
    return (
      <div className={ 'song-thumb ' + (this.state.play ? ' played' : '')} data-id={ result.artistId }>
        <div 
          className={ 'thumb' + (this.state.play ? ' animated infinite pulse' : '') }
          onClick={ () => this.setState({ play: !this.state.play }) }
          onMouseOver={ () => this.setState({ control: true }) }
          onMouseLeave={ () => this.setState({ control: this.state.play ? true : false }) }>
          <div className={'player pointer flex flex-around-center animated ' + (this.state.control ? 'bounceIn' : 'bounceOut') }>
            <span className={ 'fas fa-' + (!this.state.play ? 'play' : 'pause') }></span>
          </div>
          <img src={ result.thumb } alt={ result.collectionName } width="60" />
        </div>
        <div className="details flex flex-column-center">
          <h3 className="name mg-bottom-10">{ result.trackName }</h3>
          <div 
            onClick={ () => this.props.history.push(`${config.routesList.artist}/${result.artistId}`) }
            className="artist-name pointer">
            { result.artistName }
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

export default withRouter(TrackThumb);