import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as toastr } from 'react-redux-toastr';
import auth from './auth/reducer';

export default history =>
  combineReducers({
    auth,
    toastr,
    router: connectRouter(history),
  });
