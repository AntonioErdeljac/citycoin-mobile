import PropTypes from 'prop-types';
import React from 'react';
import NativeSplashScreen from 'react-native-splash-screen';
import { View, AsyncStorage, StatusBar, Image } from 'react-native';
import { connect } from 'react-redux';

import selectors from './selectors';
import styles from './styles';

import images from '../../../assets/images';

class SplashScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: () => null,
    drawerLockMode: 'locked-closed',
  }

  componentDidMount() {
    const { navigation } = this.props;

    NativeSplashScreen.hide();

    setTimeout(() => {
      AsyncStorage.getItem('token')
        .then((token) => {
          if (token) {
            navigation.navigate('PostsList', { isInitial: true });
          } else {
            navigation.navigate('Authentication');
          }
        });
    }, 5000);
  }

  render() {
    return (
      <View style={styles.center}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#4E65F6"
        />
        <View style={styles.loading}>
          <Image
            source={images.CCTitleSingle}
            style={{ height: 110, width: 220, paddingRight: 10 }}
          />
        </View>
      </View>
    );
  }
}

SplashScreen.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  null,
)(SplashScreen);
