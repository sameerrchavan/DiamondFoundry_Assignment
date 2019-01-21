import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dashboardReducer from '../reducers/dashboardReducer';

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const middleware = applyMiddleware(...middlewares);
const enhancers = [middleware];

if (process.env.NODE_ENV === 'development') {
  enhancers.push(window.devToolsExtension ? window.devToolsExtension() : f => f);
}

const store = createStore(combineReducers({ dashboardReducer}),
compose(...enhancers)
);

export default store;
