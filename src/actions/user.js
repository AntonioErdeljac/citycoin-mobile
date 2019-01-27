import { actions, paths } from '../constants';

export default {
  clearUserState: () => ({ type: actions.USER_DATA_RESET }),

  getUser: id => ({
    [actions.API_CALL]: {
      types: [
        actions.USER_GET_REQUEST,
        actions.USER_GET_SUCCESS,
        actions.USER_GET_FAILURE,
      ],
      promise: client => client.get(paths.build(paths.USERS_ID, id)),
    },
  }),
};
