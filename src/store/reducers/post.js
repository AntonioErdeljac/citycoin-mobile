import { actions } from '../../constants';

const initialState = {
  data: {},
  isLoading: false,
  hasFailedToLoad: false,
};

const actionMap = {
  [actions.POST_DATA_RESET]: () => ({ ...initialState }),

  [actions.POST_GET_REQUEST]: state => ({ ...state, isLoading: true, hasFailedToLoad: false }),
  [actions.POST_GET_SUCCESS]: (state, { result }) => ({ ...state, isLoading: false, hasFailedToLoad: false, data: result.data }),
  [actions.POST_GET_FAILURE]: state => ({ ...state, isLoading: false, hasFailedToLoad: true }),
};

export default (state = initialState, action) => {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }

  return state;
};
