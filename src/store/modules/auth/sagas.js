import { takeLatest, all, call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });

    localStorage.setItem('@Omni:token', response.data.token);

    yield put(signInSuccess(response.data.token));
  } catch (err) {
    console.log(err);
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
