import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import teams from './teams/sagas';
import projects from './projects/sagas';
import members from './members/sagas';

export default function* rootSaga() {
  return yield all([auth, teams, projects, members]);
}
