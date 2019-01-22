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

  loginByToken: token => ({
    [actions.API_CALL]: {
      types: [
        actions.AUTHENTICATION_LOGIN_TOKEN_REQUEST,
        actions.AUTHENTICATION_LOGIN_TOKEN_SUCCESS,
        actions.AUTHENTICATION_LOGIN_TOKEN_FAILURE,
      ],
      promise: client => client.get(paths.build(paths.AUTHENTCATION_LOGIN_TOKEN, token)),
    },
  }),

  register: values => ({
    [actions.API_CALL]: {
      types: [
        actions.AUTHENTICATION_REGISTER_REQUEST,
        actions.AUTHENTICATION_REGISTER_SUCCESS,
        actions.AUTHENTICATION_REGISTER_FAILURE,
      ],
      promise: client => client.post(paths.AUTHENTICATION_REGISTER, values),
    },
  }),
};
