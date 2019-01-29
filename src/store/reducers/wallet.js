import { actions } from '../../constants';

const initialState = {
  data: {},
  hasFailedToLoad: false,
  isLoading: false,
  isSubmitting: false,
  hasFailedToSubmit: false,
};

const actionMap = {
  [actions.WALLET_DATA_RESET]: () => ({ ...initialState }),

  [actions.WALLET_UPDATE_REQUEST]: state => ({
    ...state,
    isSubmitting: true,
    hasFailedToSubmit: false,
  }),

  [actions.WALLET_UPDATE_SUCCESS]: (state, { result }) => ({
    ...state,
    data: result.data,
    hasFailedToSubmit: false,
    isSubmitting: false,
  }),

  [actions.WALLET_UPDATE_FAILURE]: state => ({
    ...state,
    isSubmitting: false,
    hasFailedToSubmit: true,
  }),

  [actions.WALLET_GET_REQUEST]: state => ({
    ...state,
    isLoading: true,
    hasFailedToLoad: false,
  }),

  [actions.WALLET_GET_SUCCESS]: (state, { result }) => ({
    ...state,
    data: result.data,
    hasFailedToLoad: false,
    isLoading: false,
  }),

  [actions.WALLET_GET_FAILURE]: state => ({
    ...state,
    isLoading: false,
    hasFailedToLoad: true,
  }),
};

export default (state = initialState, action) => {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }

  return state;
};
