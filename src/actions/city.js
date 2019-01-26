import { actions, paths } from '../constants';

export default {
  clearCityState: () => ({ type: actions.CITY_DATA_RESET }),

  getCity: id => ({
    [actions.API_CALL]: {
      types: [
        actions.CITY_GET_REQUEST,
        actions.CITY_GET_SUCCESS,
        actions.CITY_GET_FAILURE,
      ],
      promise: client => client.get(paths.build(paths.CITIES_ID, id)),
    },
  }),
};
