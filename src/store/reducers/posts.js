import { actions } from '../../constants';

const initialState = {
  data: [],
  hasFailedToLoad: false,
  isLoading: false,
  isLoadingAdditional: false,
  query: {},
};

const actionMap = {
  [actions.POSTS_DATA_RESET]: () => ({ ...initialState }),

  [actions.POSTS_SET_QUERY]: (state, { value, label }) => ({ ...state, query: { ...state.query, [label]: value } }),

  [actions.POSTS_GET_REQUEST]: (state, { hasPageQuery }) => ({
    ...state,
    isLoading: true,
    hasFailedToLoad: false,
    isLoadingAdditional: hasPageQuery,
  }),
  [actions.POSTS_GET_SUCCESS]: (state, { result, hasPageQuery }) => ({
    ...state,
    isLoading: false,
    hasFailedToLoad: false,
    data: hasPageQuery
      ? state.data.concat(result.data ? result.data : [])
      : result.data,
    isLoadingAdditional: false,
  }),
  [actions.POSTS_GET_FAILURE]: (state, { hasPageQuery }) => ({
    ...state,
    isLoading: false,
    hasFailedToLoad: !hasPageQuery,
    isLoadingAdditional: false,
  }),
};

export default (state = initialState, action) => {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }

  return state;
};
