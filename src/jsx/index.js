/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
//
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/toastr/build/toastr.min.css';
import '../css/app.css';
//
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
//
import configureStore from './store/configureStore';
import App from './components/App'; //eslint-disable-line import/no-named-as-default
import initialState from './models/initialState';

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <Router>
        <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
);



