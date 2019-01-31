import { actions, paths } from '../constants';

export default {
  clearCitiesState: () => ({ type: actions.CITIES_DATA_RESET }),

  getCities: filters => ({
    [actions.API_CALL]: {
      types: [
        actions.CITIES_GET_REQUEST,
        actions.CITIES_GET_SUCCESS,
        actions.CITIES_GET_FAILURE,
      ],
      promise: client => client.get(paths.CITIES, { params: filters }),
    },
  }),
};
