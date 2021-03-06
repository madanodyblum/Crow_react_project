import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore'
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import App from './layouts/app';
import history from './history';
// import './assets/css/style.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.app.css';

import { getAuth } from './components/auth';
const isAuthenticated = getAuth();
const store = configureStore()
if(!isAuthenticated){
  window.localStorage.setItem('crow_lang',  'en_US');
  window.localStorage.setItem('crow_label',  'English');
}
window.React = React

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/" component={App} />
      </Switch>
      </Router>
    </Provider>,
  document.getElementById('app')
)
