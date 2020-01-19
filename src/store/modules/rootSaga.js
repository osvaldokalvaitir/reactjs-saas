import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import teams from './teams/sagas';

export default function* rootSaga() {
  return yield all([auth, teams]);
}
