import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as toastr } from 'react-redux-toastr';
import auth from './auth/reducer';
import teams from './teams/reducer';
import projects from './projects/reducer';

export default history =>
  combineReducers({
    auth,
    teams,
    projects,
    toastr,
    router: connectRouter(history),
  });
