export default state => ({
  currentUser: state.authentication.currentUser,
  hasFailedToLoad: state.wallet.hasFailedToLoad,
  hasFailedToSubmit: state.wallet.hasFailedToSubmit,
  isLoading: state.wallet.isLoading,
  isSubmitting: state.wallet.isSubmitting,
});
