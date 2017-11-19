import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './_store/configure.store';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadUsers} from './_actions/user.actions';
import '../node_modules/toastr/build/toastr.min.css';
  
const store = configureStore();
store.dispatch(loadUsers());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);