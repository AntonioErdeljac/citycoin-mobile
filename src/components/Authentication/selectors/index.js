export default state => ({
  hasFailedToSubmit: state.authentication.hasFailedToSubmit,
  isSubmitting: state.authentication.isSubmitting,
  currentUser: state.authentication.currentUser,
});
