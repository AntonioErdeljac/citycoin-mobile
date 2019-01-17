import { actions, paths } from '../constants';

export default {
  clearPostsState: () => ({ type: actions.POSTS_DATA_RESET }),

  setQuery: (value, label) => ({ type: actions.POSTS_SET_QUERY, value, label }),

  getPosts: filters => ({
    [actions.API_CALL]: {
      types: [
        actions.POSTS_GET_REQUEST,
        actions.POSTS_GET_SUCCESS,
        actions.POSTS_GET_FAILURE,
      ],
      promise: client => client.get(paths.POSTS, { params: filters }),
      hasPageQuery: !!(filters && filters.page),
    },
  }),
};
