import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, TeamList, Team } from './styles';

import { getTeamsRequest } from '~/store/modules/teams/actions';

export default function TeamSwitcher() {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.teams);

  useEffect(() => {
    async function loadTeams() {
      dispatch(getTeamsRequest());
    }

    loadTeams();
  }, [dispatch]);

  return (
    <Container>
      <TeamList>
        {teams.data.map(team => (
          <Team key={team.id}>
            <img
              alt={team.name}
              src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`}
            />
          </Team>
        ))}
      </TeamList>
    </Container>
  );
}
