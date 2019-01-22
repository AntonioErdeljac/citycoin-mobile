export default state => ({
  city: state.city.data,
  currentUser: state.authentication.currentUser,
  hasFailedToLoad: state.city.hasFailedToLoad,
  isLoading: state.city.isLoading,
});
