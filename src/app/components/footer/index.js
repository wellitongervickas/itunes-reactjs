import React, { Component } from 'react';
import config from '../../../config';

export default class Footer extends Component {

  render() {

    const year = new Date().getFullYear();
    
    return (
      <section>
        <footer className="flex flex-around-center">
            { config.app.appName } &copy; { year }
        </footer>
      </section>
    )
  }
}
