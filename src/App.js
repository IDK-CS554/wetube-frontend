import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppHeader from "./components/AppHeader";

import "./App.scss";

class App extends Component {
  render() {
    // React-router goes in this file
    // import pages from './pages'
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={() => AppHeader("Sample Homepage")}
            />
            <Route
              path="/dashboard"
              component={() => AppHeader("Sample Dashboard")}
            />
            <Route component={() => AppHeader("404: Nothing Matched!")} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
