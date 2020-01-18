import { combineReducers } from 'redux';

import { reducer as toastr } from 'react-redux-toastr';
import auth from './auth/reducer';

export default combineReducers({
  auth,
  toastr,
});
