import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import selectors from './selectors';
import styles from './styles';

import { Loading, Error } from '../common/components';

import actions from '../../actions';

class SplashScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: () => null,
  }

  componentDidMount() {
    const { navigation, getPosts } = this.props;

    getPosts()
      .then(() => {
        navigation.navigate('PostsList', { isInitial: true });
      });
  }

  render() {
    const { hasFailedToLoad } = this.props;

    return (
      <View style={styles.center}>
        {
          hasFailedToLoad
            ? <Error />
            : <Loading />
        }
      </View>
    );
  }
}

SplashScreen.propTypes = {
  getPosts: PropTypes.func.isRequired,
  navigation: PropTypes.shape({}).isRequired,
  hasFailedToLoad: PropTypes.bool.isRequired,
};

export default connect(
  selectors,
  {
    ...actions.posts,
  },
)(SplashScreen);
