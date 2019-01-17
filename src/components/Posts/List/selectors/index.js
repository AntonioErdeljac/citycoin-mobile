import { _t } from '../../../../i18n';

import images from '../../../../../assets/images';

const setData = state => state.posts.data.map(post => ({
  ...post,
  description: post.description || _t('labels.undefined'),
  imageUri: post.imageUri ? { uri: post.imageUri } : images.teamPlaceholder,
  title: post.title || _t('labels.undefined'),
}));

export default state => ({
  hasFailedToLoad: state.posts.hasFailedToLoad,
  isLoading: state.posts.isLoading,
  isLoadingAdditional: state.posts.isLoadingAdditional,
  posts: setData(state),
  query: state.posts.query,
});
