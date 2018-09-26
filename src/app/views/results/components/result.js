import React from 'react';
import { NavLink } from 'react-router-dom';
import config from '../../../../config';

const Result = props => (
  <div className="item mg-bottom-20" data-id={ props.result.artistId }>
    <div className="thumb">
      <img src={ props.result.thumb } alt={ props.result.collectionName } />
    </div>
    <div className="details flex flex-column-center">
      <h3 className="name mg-bottom-10">{ props.result.trackName }</h3>
      <div className="artist-name">
        <NavLink to={ `${config.routesList.artist}/${props.result.artistId}` }>
          { props.result.artistName }
        </NavLink>
      </div>
    </div>
    <div className="time flex flex-column-center">
      { props.result.trackTime }
    </div>
  </div>  
);

export default Result;