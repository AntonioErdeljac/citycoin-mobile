import { actions, paths } from '../constants';

export default {
  clearServiceData: () => ({ type: actions.SERVICE_DATA_RESET }),

  getService: id => ({
    [actions.API_CALL]: {
      types: [
        actions.SERVICE_GET_REQUEST,
        actions.SERVICE_GET_SUCCESS,
        actions.SERVICE_GET_FAILURE,
      ],
      promise: client => client.get(paths.build(paths.SERVICES_ID, id)),
    },
  }),

  subscribe: (serviceId, subscriptionId) => ({
    [actions.API_CALL]: {
      types: [
        actions.SERVICE_SUBSCRIBE_REQUEST,
        actions.SERVICE_SUBSCRIBE_SUCCESS,
        actions.SERVICE_SUBSCRIBE_FAILURE,
      ],
      promise: client => client.get(paths.build(paths.SERVICES_ID_SUBSCRIPTIONS_ID, serviceId, subscriptionId)),
    },
  }),
};
