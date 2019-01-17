import { actions, paths } from '../constants';

export default {
  clearClubsState: () => ({ type: actions.CLUBS_DATA_RESET }),

  setQuery: (value, key) => ({ type: actions.CLUBS_SET_QUERY, value, key }),

  getClubs: filters => ({
    [actions.API_CALL]: {
      types: [
        actions.CLUBS_GET_REQUEST,
        actions.CLUBS_GET_SUCCESS,
        actions.CLUBS_GET_FAILURE,
      ],
      promise: client => client.get(paths.CLUBS, { params: filters }),
    },
  }),
};
