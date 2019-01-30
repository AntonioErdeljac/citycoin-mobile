import { actions } from '../../constants';

const initialState = {
  data: {},
  hasFailedToLoad: false,
  isLoading: false,
};

const actionMap = {
  [actions.SUBSCRIBED_SERVICE_DATA_RESET]: () => ({ ...initialState }),

  [actions.SUBSCRIBED_SERVICE_GET_REQUEST]: state => ({
    ...state,
    isLoading: true,
    hasFailedToLoad: false,
  }),

  [actions.SUBSCRIBED_SERVICE_GET_SUCCESS]: (state, { result }) => ({
    ...state,
    data: result.data,
    hasFailedToLoad: false,
    isLoading: false,
  }),

  [actions.SUBSCRIBED_SERVICE_GET_FAILURE]: state => ({
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
