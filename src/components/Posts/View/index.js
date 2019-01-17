import PropTypes from 'prop-types';
import React from 'react';
import { Linking } from 'react-native';
import { ActionSheet } from 'native-base';
import { connect } from 'react-redux';

import selectors from './selectors';

import { ArticlesView, MenuButton } from '../../common/components';

import actions from '../../../actions';

class PostsView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTintColor: 'black',
    headerLeft: <MenuButton onPress={() => navigation.goBack()} name="ios-arrow-round-back" />,
    headerRight: (
      <MenuButton
        right
        onPress={() => ActionSheet.show(
          {
            options: ['Otvori u pregledniku', 'Zatvori'],
            cancelButtonIndex: 1,
            title: 'Opcije',
          },
          (button) => {
            if (button === 0) {
              Linking.openURL(navigation.state.params.url);
            }
          },
        )}
        name="external-link"
      />
    ),
  })

  handleGetPost = () => {
    const { getPost, navigation } = this.props;

    getPost(navigation.state.params.id);
  }

  render() {
    const { initialValues, hasFailedToLoad, isLoading, navigation, clearPostState } = this.props;

    return (
      <ArticlesView
        renderHtml
        initialValues={initialValues}
        isLoading={isLoading}
        hasFailedToLoad={hasFailedToLoad}
        navigation={navigation}
        getArticle={this.handleGetPost}
        clearArticleState={clearPostState}
      />
    );
  }
}

PostsView.propTypes = {
  clearPostState: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  hasFailedToLoad: PropTypes.bool.isRequired,
  initialValues: PropTypes.shape({}).isRequired,
  isLoading: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  {
    ...actions.post,
  },
)(PostsView);
