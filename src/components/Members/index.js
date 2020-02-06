import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import api from '~/services/api';

import Modal from '~/components/Modal';
import Button from '~/styles/components/Button';
import { MembersList } from './styles';

import {
  getMembersRequest,
  updateMemberRequest,
  closeMembersModal,
} from '~/store/modules/members/actions';

export default function Members() {
  const dispatch = useDispatch();
  const members = useSelector(state => state.members);
  const [allRoles, setRoles] = useState([]);

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

  return (
    <Modal size="big">
      <h1>Membros</h1>

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
