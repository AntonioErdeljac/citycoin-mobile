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
  CITIES: '/api/v1/cities',
  SERVICES_ID: '/api/v1/services/:id',
  SERVICES_ID_SUBSCRIPTIONS_ID: '/api/v1/services/:id/subscrptions/:subscriptionId',
  STATIC_USER_PLACEHOLDER: `${config.server.uri}/static/user-placeholder.png`,
  SUBSCRIBED_SERVICES_ID: '/api/v1/subscribed-services/:id',
  SUBSCRIBED_SERVICES_ID_VERIFICATION: '/api/v1/subscribed-services/:id/verification',
  USERS_ID: '/api/v1/users/:id',
  WALLETS_ID: '/api/v1/wallets/:id',
};
