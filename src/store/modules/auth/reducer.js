import produce from 'immer';

const INITIAL_STATE = {
  signedIn: false,
  token: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        break;
      }
      default:
    }
  });
}
