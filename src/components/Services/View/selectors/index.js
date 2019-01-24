export default state => ({
  hasFailedToLoad: state.service.hasFailedToLoad,
  isLoading: state.service.isLoading,
  service: state.service.data,
});
