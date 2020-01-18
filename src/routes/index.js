import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import history from './history';

import Main from '~/pages/Main';
import SignUp from '~/pages/Auth/SignUp';
import SignIn from '~/pages/Auth/SignIn';

export default function Routes() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" exact component={Main} />
      </Switch>
    </ConnectedRouter>
  );
}
