import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import App from './components/App';

import Twitter from './pages/Twitter';

export default (
  <Route name='home' path='/' handler={App}>
    <DefaultRoute handler={Twitter} />
  </Route>
);
