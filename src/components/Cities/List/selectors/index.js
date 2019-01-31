export default state => ({
  cities: state.cities.data,
  hasFailedToLoad: state.cities.hasFailedToLoad,
  isLoading: state.cities.isLoading,
  totalCities: state.cities.total,
});
