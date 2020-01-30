import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';

import { getProjectsSuccess } from './actions';

export function* getProjects() {
  const response = yield call(api.get, 'projects');

  yield put(getProjectsSuccess(response.data));
}

export default all([takeLatest('@projects/GET_PROJECTS_REQUEST', getProjects)]);
