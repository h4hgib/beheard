import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import withRoot from '../styles/withRoot';
import {AuthProvider} from "./Auth/AuthStore";

import AppShell from "./AppShell";
import HomePage from "../pages/HomePage";
import IssuesPage from "../pages/IssuesPage";
import LandingPage from "../pages/LandingPage";

import LoggedIn from "../pages/LoggedIn";
import PresentationPage from "../pages/PresentationPage";

class App extends React.Component {

  constructor(props) {
    super(props);


  }

  render() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <div>
            <Route path="/" component={AppShell}/>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/home" component={LandingPage}/>
              <Route path="/LoggedIn" component={LoggedIn}/>
              <Route path="/issues" component={IssuesPage}/>
              <Route path="/presentation" component={PresentationPage}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AuthProvider>
    );
  }
}

export default withRoot(App);
