import { actions, paths } from '../constants';

export default {
  getCalendarPractices: () => ({
    [actions.API_CALL]: {
      types: [
        actions.CALENDAR_GET_REQUEST,
        actions.CALENDAR_GET_SUCCESS,
        actions.CALENDAR_GET_FAILURE,
      ],
      promise: client => client.get(paths.CALENDAR_PRACTICES),
    },
  }),

  getCalendarContests: () => ({
    [actions.API_CALL]: {
      types: [
        actions.CALENDAR_GET_REQUEST,
        actions.CALENDAR_GET_SUCCESS,
        actions.CALENDAR_GET_FAILURE,
      ],
      promise: client => client.get(paths.CALENDAR_CONTESTS),
    },
  }),
};
