import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import withRoot from '../styles/withRoot';
import {AuthProvider} from "./Auth/AuthStore";

import AppShell from "./AppShell";
import HomePage from "../pages/HomePage";

import LoggedIn from "../pages/LoggedIn";

class App extends React.Component {

  render() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <div>
            <Route path="/" component={AppShell}/>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/LoggedIn" component={LoggedIn}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AuthProvider>
    );
  }
}

export default withRoot(App);
