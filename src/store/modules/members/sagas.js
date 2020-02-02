import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';

import { getMembersSuccess } from './actions';

export function* getMembers() {
  const response = yield call(api.get, 'members');

  yield put(getMembersSuccess(response.data));
}

export default all([takeLatest('@members/GET_MEMBERS_REQUEST', getMembers)]);
