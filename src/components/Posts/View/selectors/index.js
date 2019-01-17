import { _t } from '../../../../i18n';

const setInitialValues = state => ({
  imageUri: { uri: state.post.data.imageUri },
  title: state.post.data.title || _t('labels.undefined'),
  description: state.post.data.description || _t('labels.undefined'),
  createdAt: state.post.data.createdAt || _t('labels.undefined'),
  htmlContent: state.post.data.htmlContent,
});

export default state => ({
  hasFailedToLoad: state.post.hasFailedToLoad,
  isLoading: state.post.isLoading,
  initialValues: setInitialValues(state),
});
