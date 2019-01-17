import { actions, paths } from '../constants';

export default {
  clearWebClippingState: () => ({ type: actions.WEB_CLIPPING_DATA_RESET }),

  getWebClipping: accessToken => ({
    [actions.API_CALL]: {
      types: [
        actions.WEB_CLIPPINGS_GET_REQUEST,
        actions.WEB_CLIPPINGS_GET_SUCCESS,
        actions.WEB_CLIPPINGS_GET_FAILURE,
      ],
      promise: client => client.get(paths.WEB_CLIPPINGS, { headers: { Authorization: `Bearer ${accessToken}`, Accept: 'application/json' } }),
    },
  }),
};
