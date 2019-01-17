import { actions, paths } from '../constants';

export default {
  clearWebClippingState: () => ({ type: actions.WEB_CLIPPING_DATA_RESET }),

  getWebClipping: (id, accessToken) => ({
    [actions.API_CALL]: {
      types: [
        actions.WEB_CLIPPING_GET_REQUEST,
        actions.WEB_CLIPPING_GET_SUCCESS,
        actions.WEB_CLIPPING_GET_FAILURE,
      ],
      promise: client => client.get(paths.build(paths.build(paths.WEB_CLIPPINGS_ID, id)), { headers: { Authorization: `Bearer ${accessToken}`, Accept: 'application/json' } }),
    },
  }),
};
