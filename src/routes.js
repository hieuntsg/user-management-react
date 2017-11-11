import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './_components/App';
import HomePage from './_components/home/HomePage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
);