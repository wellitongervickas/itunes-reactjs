import React from 'react';
import { NavLink } from 'react-router-dom';
import ItunesLogoPNG from '../../assets/images/app/itunes-logo.png';
import config from '../../config';

const Logo = () => (
  <div className="logo">
    <NavLink to={ '/' }>
      <img src={ ItunesLogoPNG } alt={ config.app.appName } width="100" />
    </NavLink>
  </div>
);

export default Logo;