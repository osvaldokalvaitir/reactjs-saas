import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as toastr } from 'react-redux-toastr';
import auth from './auth/reducer';
import teams from './teams/reducer';

export default history =>
  combineReducers({
    auth,
    teams,
    toastr,
    router: connectRouter(history),
  });
