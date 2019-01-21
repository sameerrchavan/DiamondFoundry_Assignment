import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import Dashboard from './Dashboard';

class RoutingHolder extends React.Component {
  
  render() {
    return (<div>
      <Router history={this.props.history}>
        <Switch>
          <Route path='/'
            component={Dashboard} />
        </Switch>
      </Router>
    </div>
    );
  }
}

export default RoutingHolder;
