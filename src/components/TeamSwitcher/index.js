import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '~/styles/components/Button';
import Modal from '~/components/Modal';

import { Container, TeamList, Team, NewTeam } from './styles';

import {
  getTeamsRequest,
  selectTeam,
  openTeamModal,
  closeTeamModal,
} from '~/store/modules/teams/actions';

export default function TeamSwitcher() {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.teams);

  useEffect(() => {
    async function loadTeams() {
      dispatch(getTeamsRequest());
    }

    loadTeams();
  }, [dispatch]);

  function handleTeamSelect(team) {
    dispatch(selectTeam(team));
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

            <form onSubmit={() => {}}>
              <span>NOME</span>
              <input name="newTeam" />

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
