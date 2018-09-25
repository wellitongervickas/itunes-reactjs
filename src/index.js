/**
 * 
 * # Itunes Serasa Consumidor
 * 
 * Javascript Style Guide: https://github.com/airbnb/javascript
 *
 * React Style Guides: https://github.com/airbnb/javascript/tree/master/react
 *
 * Read more of best pratices:
 * https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1
 *
 * Scss Style Guide: https://sass-lang.com/styleguide
 * 
 * Helpers: https://github.com/wellitongervickas/my-helpers/
 *
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

// Style Files
import 'normalize.css'; // https://github.com/necolas/normalize.css
import 'animate.css'; // https://daneden.github.io/animate.css/
import './assets/styles/app.css';

// Redux
import { Provider } from 'react-redux';
import { history, store } from './store';
import { ConnectedRouter } from 'react-router-redux';

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <App/>
    </ConnectedRouter>
  </Provider>
,document.getElementById('root'));

// Regiter Service Worker
registerServiceWorker();
