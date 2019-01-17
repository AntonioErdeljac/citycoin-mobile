import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import selectors from './selectors';

import { MenuButton, DataSearch } from '../../common/components';

import actions from '../../../actions';
import { _t } from '../../../i18n';

class PostsSearch extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: _t('navigation.news'),
    headerLeft: <MenuButton onPress={() => navigation.openDrawer()} name="ios-menu" />,
    headerRight: <MenuButton right onPress={() => navigation.navigate('PostsList')} name="close" />,
  });

  render() {
    const { isLoading, query, navigation, getPosts, setQuery } = this.props;

    return (
      <DataSearch
        searchKey="search"
        getData={getPosts}
        isLoading={isLoading}
        navigation={navigation}
        query={query}
        setQuery={setQuery}
      />
    );
  }
}

PostsSearch.propTypes = {
  query: PropTypes.shape({}).isRequired,
  setQuery: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  {
    ...actions.posts,
  },
)(PostsSearch);
