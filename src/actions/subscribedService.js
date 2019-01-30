import { actions, paths } from '../constants';

export default {
  clearSubscribedServiceState: () => ({ type: actions.SUBSCRIBED_SERVICE_DATA_RESET }),

  getSubscribedService: id => ({
    [actions.API_CALL]: {
      types: [
        actions.SUBSCRIBED_SERVICE_GET_REQUEST,
        actions.SUBSCRIBED_SERVICE_GET_SUCCESS,
        actions.SUBSCRIBED_SERVICE_GET_FAILURE,
      ],
      promise: client => client.get(paths.build(paths.SUBSCRIBED_SERVICES_ID, id)),
    },
  }),
};
