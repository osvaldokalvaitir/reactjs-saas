import produce from 'immer';

const INITIAL_STATE = {
  // data: [],
  membersModalOpen: false,
};

export default function members(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      // case '@projects/GET_PROJECTS_SUCCESS': {
      //   draft.data = action.payload.data;
      //   break;
      // }
      // case '@projects/CREATE_PROJECT_SUCCESS': {
      //   const { project } = action.payload;

      //   draft.data.push(project);
      //   break;
      // }
      case '@members/OPEN_MEMBERS_MODAL': {
        draft.membersModalOpen = true;
        break;
      }
      case '@members/CLOSE_MEMBERS_MODAL': {
        draft.membersModalOpen = false;
        break;
      }
      default:
    }
  });
}
