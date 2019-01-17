import { actions, paths } from '../constants';

export default {
  clearEventState: () => ({ type: actions.EVENT_DATA_RESET }),

  getContestEvent: id => ({
    [actions.API_CALL]: {
      types: [
        actions.EVENT_GET_REQUEST,
        actions.EVENT_GET_SUCCESS,
        actions.EVENT_GET_FAILURE,
      ],
      promise: client => client.get(paths.build(paths.CALENDAR_CONTESTS_ID, id)),
    },
  }),

  getPracticeEvent: id => ({
    [actions.API_CALL]: {
      types: [
        actions.EVENT_GET_REQUEST,
        actions.EVENT_GET_SUCCESS,
        actions.EVENT_GET_FAILURE,
      ],
      promise: client => client.get(paths.build(paths.CALENDAR_PRACTICES_ID, id)),
    },
  }),
};
