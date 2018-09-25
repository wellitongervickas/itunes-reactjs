import React, { Component } from 'react';
import { parseString } from '../../../model/helpers/translation';
import config from '../../../config';

export default class Introduction extends Component {
  render() {

    const { texts } = config.lang;
    
    return (
      <div className="introduction">
        <h1>{ parseString(texts.welcome_to, config.app.appName) }</h1>
      </div>
    )
  }
}
