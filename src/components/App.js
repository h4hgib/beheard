import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import withRoot from '../styles/withRoot';
import {AuthProvider} from "./Auth/AuthStore";

import AppShell from "./AppShell";
import HomePage from "../pages/HomePage";
import IssuesPage from "../pages/IssuesPage";

import LoggedIn from "../pages/LoggedIn";
import BHService from "../service/Issues";

class App extends React.Component {

  constructor(props) {
    super(props);

    window.onload = () => {
      window.app = new BHService();
     };

  }

  render() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <div>
            <Route path="/" component={AppShell}/>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/LoggedIn" component={LoggedIn}/>
              <Route path="/issues" component={IssuesPage}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AuthProvider>
    );
  }
}

export default withRoot(App);
