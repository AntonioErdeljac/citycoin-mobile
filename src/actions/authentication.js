import { actions, paths } from '../constants';

export default {
  clearAuthenticationState: () => ({ type: actions.AUTHENTICATION_DATA_RESET }),

  login: ({ email, password }) => ({
    [actions.API_CALL]: {
      types: [
        actions.AUTHENTICATION_LOGIN_REQUEST,
        actions.AUTHENTICATION_LOGIN_SUCCESS,
        actions.AUTHENTICATION_LOGIN_FAILURE,
      ],
      promise: client => client.post(paths.AUTHENTICATION_LOGIN, { email, password }),
    },
  }),
};
