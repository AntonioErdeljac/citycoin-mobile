import { actions, paths } from '../constants';

export default {
  sendMail: mail => ({
    [actions.API_CALL]: {
      types: [
        actions.MAIL_POST_REQUEST,
        actions.MAIL_POST_SUCCESS,
        actions.MAIL_POST_FAILURE,
      ],
      promise: client => client.post(paths.MAIL, mail),
    },
  }),
};
