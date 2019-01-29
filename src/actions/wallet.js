import { actions, paths } from '../constants';

export default {
  clearWalletState: () => ({ type: actions.WALLET_DATA_RESET }),

  updateWallet: (id, values) => ({
    [actions.API_CALL]: {
      types: [
        actions.WALLET_UPDATE_REQUEST,
        actions.WALLET_UPDATE_SUCCESS,
        actions.WALLET_UPDATE_FAILURE,
      ],
      promise: client => client.put(paths.build(paths.WALLETS_ID, id), values),
    },
  }),

  getWallet: id => ({
    [actions.API_CALL]: {
      types: [
        actions.WALLET_GET_REQUEST,
        actions.WALLET_GET_SUCCESS,
        actions.WALLET_GET_FAILURE,
      ],
      promise: client => client.get(paths.build(paths.WALLETS_ID, id)),
    },
  }),
};
