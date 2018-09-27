import React, { Component } from 'react';
import { Logo } from '../../../components';
import { withRouter } from 'react-router-dom';
import config from '../../../config';

class Header extends Component {
  render() {
    return (
      <section>
        <header>
          <Logo />
          <div 
            className="pointer" 
            onClick={ () => this.props.history.push(config.routesList.introduction) }>
            <span className="fas fa-home"></span>
          </div>
        </header>
      </section>
    )
  }
};

export default withRouter(Header);