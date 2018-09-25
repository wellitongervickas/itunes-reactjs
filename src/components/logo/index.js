import React from 'react';
import ItunesLogoPNG from '../../assets/images/app/itunes-logo.png';
import config from '../../config';

const Logo = () => (
  <div className="logo">
    <img src={ ItunesLogoPNG } alt={ config.app.appName } width="100" />
  </div>
);

export default Logo;