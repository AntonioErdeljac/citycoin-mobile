export default state => ({
  hasFailedToLoad: state.subscribedService.hasFailedToLoad,
  isLoading: state.subscribedService.isLoading,
  subscribedService: state.subscribedService.data,
});
