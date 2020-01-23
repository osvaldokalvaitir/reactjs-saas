export function getTeamsRequest() {
  return {
    type: '@teams/GET_TEAMS_REQUEST',
  };
}

export function getTeamsSuccess(data) {
  return {
    type: '@teams/GET_TEAMS_SUCCESS',
    payload: { data },
  };
}

export function selectTeam(team) {
  return {
    type: '@teams/SELECT_TEAM',
    payload: { team },
  };
}

export function openTeamModal() {
  return {
    type: '@teams/OPEN_TEAM_MODAL',
  };
}

export function closeTeamModal() {
  return {
    type: '@teams/CLOSE_TEAM_MODAL',
  };
}
