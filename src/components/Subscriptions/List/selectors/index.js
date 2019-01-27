export default state => ({
  currentUser: state.authentication.currentUser,
  hasFailedToLoad: state.user.hasFailedToLoad,
  isLoading: state.user.isLoading,
  user: state.user.data,
});
