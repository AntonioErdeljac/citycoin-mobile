import PropTypes from 'prop-types';
import React from 'react';
import { View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import selectors from './selectors';
import styles from './styles';

import { Loading, Error } from '../common/components';

class SplashScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: () => null,
    drawerLockMode: 'locked-closed',
  }

  componentDidMount() {
    const { navigation } = this.props;

    AsyncStorage.getItem('token')
      .then((token) => {
        if (token) {
          navigation.navigate('PostsList', { isInitial: true });
        } else {
          navigation.navigate('Authentication');
        }
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
  navigation: PropTypes.shape({}).isRequired,
  hasFailedToLoad: PropTypes.bool.isRequired,
};

export default connect(
  selectors,
  null,
)(SplashScreen);
