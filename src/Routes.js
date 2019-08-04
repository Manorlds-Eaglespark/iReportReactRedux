import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import Footer from './components/common/Footer';
import history from './utils/history';
import landingPageComponent from './components/landingPageComponent';
import LoginComponent from './components/LoginComponent';

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={landingPageComponent} />
        <Route exact path="/login" component={LoginComponent} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
