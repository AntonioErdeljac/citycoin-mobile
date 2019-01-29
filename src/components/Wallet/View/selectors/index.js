export default state => ({
  currentUser: state.authentication.currentUser,
  hasFailedToLoad: state.wallet.hasFailedToLoad,
  isLoading: state.wallet.isLoading,
  wallet: state.wallet.data,
});
