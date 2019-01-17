import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import selectors from './selectors';

import { ArticlesList, MenuButton } from '../../common/components';

import actions from '../../../actions';

class PostsList extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <MenuButton onPress={() => navigation.openDrawer()} name="ios-menu" />,
    headerRight: <MenuButton right onPress={() => navigation.navigate('PostsSearch')} name="search" />,
  });

  render() {
    const { posts, navigation, isLoading, hasFailedToLoad, isLoadingAdditional, clearPostsState, getPosts, query } = this.props;

    return (
      <ArticlesList
        loadOnScroll
        articles={posts}
        articlesRoutes={['PostsSearch', 'PostsView']}
        clearArticlesState={clearPostsState}
        getArticles={getPosts}
        hasFailedToLoad={hasFailedToLoad}
        isLoading={isLoading}
        isLoadingAdditional={isLoadingAdditional}
        navigation={navigation}
        viewRoute="PostsView"
        query={query}
      />
    );
  }
}

PostsList.propTypes = {
  clearPostsState: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  hasFailedToLoad: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isLoadingAdditional: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({}).isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  query: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  {
    ...actions.posts,
  },
)(PostsList);
