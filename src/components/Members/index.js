import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from '~/components/Modal';
import Button from '~/styles/components/Button';
import { MembersList } from './styles';

import {
  getMembersRequest,
  closeMembersModal,
} from '~/store/modules/members/actions';

export default function Members() {
  const dispatch = useDispatch();
  const members = useSelector(state => state.members);

  useEffect(() => {
    async function loadMembers() {
      dispatch(getMembersRequest());
    }
    loadMembers();
  }, [dispatch]);

  return (
    <Modal size="big">
      <h1>Membros</h1>

      <form>
        <MembersList>
          {members.data.map(member => (
            <li key={member.id}>
              <strong>{member.user.name}</strong>
            </li>
          ))}
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
