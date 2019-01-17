import { actions, paths } from '../constants';

export default {
  clearClubState: () => ({ type: actions.CLUB_DATA_RESET }),

  getClub: id => ({
    [actions.API_CALL]: {
      types: [
        actions.CLUB_GET_REQUEST,
        actions.CLUB_GET_SUCCESS,
        actions.CLUB_GET_FAILURE,
      ],
      promise: client => client.get(paths.build(paths.CLUBS_ID, id)),
    },
  }),
};
