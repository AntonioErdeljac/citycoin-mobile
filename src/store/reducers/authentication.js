import { actions } from '../../constants';

const initialState = {
  hasFailedToSubmit: false,
  isSubmitting: false,
  currentUser: {},
};

const actionMap = {
  [actions.AUTHENTICATION_DATA_RESET]: () => ({ ...initialState }),

  [actions.AUTHENTICATION_LOGIN_REQUEST]: state => ({
    ...state,
    isSubmitting: true,
    hasFailedToSubmit: false,
  }),

  [actions.AUTHENTICATION_LOGIN_SUCCESS]: (state, { result }) => ({
    ...state,
    isSubmitting: false,
    hasFailedToSubmit: false,
    currentUser: result.data,
  }),

  [actions.AUTHENTICATION_LOGIN_FAILURE]: state => ({
    ...state,
    isSubmitting: false,
    hasFailedToSubmit: true,
  }),
};

export default (state = initialState, action) => {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }

  return state;
};
