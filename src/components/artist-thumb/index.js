import React, { Component } from 'react';

export default class ArtistThumb extends Component {
  render() {

    const { result } = this.props;

    return (
      <a href={ result.artistId } className="artist-thumb flex flex-center-column">
        <div className="thumb">
          <img  src={ result.artworkUrl100 }  alt={ result.artistName }/>
        </div>
        <div className="name mg-top-20">
          <h3>{ result.artistName }</h3>
          <p>{ result.primaryGenreName }</p>
        </div>
      </a>
    )
  }
}
