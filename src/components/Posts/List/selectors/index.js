import { _t } from '../../../../i18n';

const setData = state => state.posts.data.map(post => ({
  ...post,
  description: post.description || _t('labels.undefined'),
  imageUri: { uri: post.imageUri },
  title: post.title || _t('labels.undefined'),
}));

export default state => ({
  hasFailedToLoad: state.posts.hasFailedToLoad,
  isLoading: state.posts.isLoading,
  isLoadingAdditional: state.posts.isLoadingAdditional,
  posts: setData(state),
  query: state.posts.query,
});
