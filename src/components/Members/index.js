import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import api from '~/services/api';

import Modal from '~/components/Modal';
import Button from '~/styles/components/Button';
import { MembersList, Invite } from './styles';

import {
  getMembersRequest,
  updateMemberRequest,
  inviteMemberRequest,
  closeMembersModal,
} from '~/store/modules/members/actions';

export default function Members() {
  const dispatch = useDispatch();
  const members = useSelector(state => state.members);
  const [allRoles, setRoles] = useState([]);
  const [invite, setInvite] = useState('');

  useEffect(() => {
    async function loadMembers() {
      dispatch(getMembersRequest());
    }
    async function loadRoles() {
      const response = await api.get('roles');

      setRoles(response.data);
    }

    loadMembers();
    loadRoles();
  }, [dispatch]);

  function handleRolesChange(id, roles) {
    dispatch(updateMemberRequest(id, roles));
  }

  function handleInvite(e) {
    e.preventDefault();

    dispatch(inviteMemberRequest(invite));
  }

  return (
    <Modal size="big">
      <h1>Membros</h1>

      <Invite onSubmit={handleInvite}>
        <input
          name="invite"
          placeholder="Convidar para o time"
          value={invite}
          onChange={e => setInvite(e.target.value)}
        />
        <Button type="submit">Enviar</Button>
      </Invite>

      <form>
        <MembersList>
          {members.data.map(member => (
            <li key={member.id}>
              <strong>{member.user.name}</strong>
              <Select
                isMulti
                options={allRoles}
                value={member.roles}
                getOptionLabel={role => role.name}
                getOptionValue={role => role.id}
                onChange={value => handleRolesChange(member.id, value)}
              />
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
