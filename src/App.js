import 'babel-polyfill';
import React from 'react';
import { connect } from 'react-redux';
import createHashHistory from 'history/createHashHistory';

import RoutingHolder from './containers/RoutingHolder'

import { ErrorBoundary } from './components/core';

const history = createHashHistory();

class App extends React.Component {

  render() {
    return (
          <ErrorBoundary>
            <RoutingHolder history={history} />
          </ErrorBoundary>
    );
  }
}

const mapStateToProps = state => ({ authStore: state.authReducer });

export default connect(mapStateToProps)(
  App
);
