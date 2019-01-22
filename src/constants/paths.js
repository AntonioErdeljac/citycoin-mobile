import config from '../config';

export default {
  build: (path, ...params) => {
    params.reverse();
    return path.replace(/(:\w+)/g, () => params.pop());
  },

  AUTHENTCATION_LOGIN_TOKEN: '/api/v1/authentication/login/:token',
  AUTHENTICATION_LOGIN: '/api/v1/authentication/login',
  AUTHENTICATION_REGISTER: '/api/v1/authentication/registration',
  CITIES_ID: '/api/v1/cities/:id',

  STATIC_USER_PLACEHOLDER: `${config.server.uri}/static/user-placeholder.png`,
};
