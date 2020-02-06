import { takeLatest, call, put, all } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '~/services/api';

import { getMembersSuccess } from './actions';

export function* getMembers() {
  const response = yield call(api.get, 'members');

  yield put(getMembersSuccess(response.data));
}

export function* updateMember({ payload }) {
  const { id, roles } = payload;

  try {
    yield call(api.put, `members/${id}`, { roles: roles.map(role => role.id) });

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Membro atualizado',
        message: 'O membro foi atualizado com sucesso',
      })
    );
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Erro na operação',
        message: 'Houve um erro, tente novamente!',
      })
    );
  }
}

export default all([
  takeLatest('@members/GET_MEMBERS_REQUEST', getMembers),
  takeLatest('@members/UPDATE_MEMBERS_REQUEST', updateMember),
]);
