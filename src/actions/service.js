import { actions, paths } from '../constants';

export default {
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
};
