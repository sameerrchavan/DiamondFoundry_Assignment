import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import App from './App';
import { ErrorBoundary } from './components/core';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('app')
);
