import React from 'react';
import { useDispatch } from 'react-redux';

import Modal from '~/components/Modal';
import Button from '~/styles/components/Button';
import { MembersList } from './styles';

import { closeMembersModal } from '~/store/modules/members/actions';

export default function Members() {
  const dispatch = useDispatch();

  return (
    <Modal size="big">
      <h1>Membros</h1>

      <form>
        <MembersList>
          <li>
            <strong>Osvaldo Kalvaitir</strong>
          </li>
        </MembersList>

        <Button
          onClick={() => dispatch(closeMembersModal())}
          filled={false}
          color="gray"
        >
          Cancelar
        </Button>
      </form>
    </Modal>
  );
}
