import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '~/styles/components/Button';
import Modal from '~/components/Modal';

import { Container, TeamList, Team, NewTeam } from './styles';

import {
  getTeamsRequest,
  selectTeam,
  openTeamModal,
  closeTeamModal,
  createTeamRequest,
} from '~/store/modules/teams/actions';

export default function TeamSwitcher() {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.teams);
  const [newTeam, setNewTeam] = useState('');

  useEffect(() => {
    async function loadTeams() {
      dispatch(getTeamsRequest());
    }

    loadTeams();
  }, [dispatch]);

  function handleTeamSelect(team) {
    dispatch(selectTeam(team));
  }

  function handleCreateTeam(e) {
    e.preventDefault();

    dispatch(createTeamRequest(newTeam));
  }

  return (
    <Container>
      <TeamList>
        {teams.data.map(team => (
          <Team key={team.id} onClick={() => handleTeamSelect(team)}>
            <img
              alt={team.name}
              src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`}
            />
          </Team>
        ))}

        <NewTeam
          onClick={() => {
            dispatch(openTeamModal());
          }}
        >
          NOVO
        </NewTeam>

        {teams.teamModalOpen && (
          <Modal>
            <h1>Criar time</h1>

            <form onSubmit={handleCreateTeam}>
              <span>NOME</span>
              <input
                name="newTeam"
                value={newTeam}
                onChange={e => setNewTeam(e.target.value)}
              />

              <Button size="big" type="submit">
                Savar
              </Button>
              <Button
                onClick={() => {
                  dispatch(closeTeamModal());
                }}
                size="small"
                color="gray"
              >
                Cancelar
              </Button>
            </form>
          </Modal>
        )}
      </TeamList>
    </Container>
  );
}
