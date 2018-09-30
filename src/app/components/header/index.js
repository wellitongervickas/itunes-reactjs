import React from 'react';
import { Logo } from '../../../components';
import { withRouter } from 'react-router-dom';
import config from '../../../config';

const Header = (props) => (
  <section>
    <header>
      <Logo />
      <div 
        className="pointer text-right" 
        onClick={ () => props.history.push(config.routesList.introduction) }>
        <span className="fas fa-home"></span>
      </div>
    </header>
  </section>
);

export default withRouter(Header);