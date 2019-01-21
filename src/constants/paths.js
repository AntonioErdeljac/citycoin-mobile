export default {
  build: (path, ...params) => {
    params.reverse();
    return path.replace(/(:\w+)/g, () => params.pop());
  },

  AUTHENTICATION_LOGIN: '/api/v1/authentication/login',
  AUTHENTICATION_REGISTER: '/api/v1/authentication/registration',
};
