import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  active: JSON.parse(localStorage.getItem('@Omni:team')) || null,
};

export default function teams(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@teams/GET_TEAMS_SUCCESS': {
        draft.data = action.payload.data;
        break;
      }
      case '@teams/SELECT_TEAM': {
        localStorage.setItem('@Omni:team', JSON.stringify(action.payload.team));

        draft.active = action.payload.team;
        break;
      }
      default:
    }
  });
}
