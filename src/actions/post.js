import { actions, paths } from '../constants';

export default {
  clearPostState: () => ({ type: actions.POST_DATA_RESET }),

  getPost: id => ({
    [actions.API_CALL]: {
      types: [
        actions.POST_GET_REQUEST,
        actions.POST_GET_SUCCESS,
        actions.POST_GET_FAILURE,
      ],
      promise: client => client.get(paths.build(paths.POSTS_ID, id)),
    },
  }),
};
