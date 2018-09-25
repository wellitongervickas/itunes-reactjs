import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
import rootSaga from './sagas';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware, routerMiddleware(history) ];
const store = createStore( reducers, applyMiddleware(...middlewares) );

sagaMiddleware.run(rootSaga);

export { store, history };
