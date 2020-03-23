import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Stopwatch from './Stopwatch';

import Portfolio from './Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={() => <Portfolio />} />
          <Route exact path="/stopwatch" component={() => <Stopwatch />} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
