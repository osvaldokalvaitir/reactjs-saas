import produce from 'immer';

const INITIAL_STATE = {
  data: [],
};

export default function projects(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@projects/GET_PROJECTS_SUCCESS': {
        draft.data = action.payload.data;
        break;
      }
      default:
    }
  });
}
