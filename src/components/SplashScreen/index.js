import PropTypes from 'prop-types';
import React from 'react';
import NativeSplashScreen from 'react-native-splash-screen';
import { View, AsyncStorage, StatusBar, Image, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import selectors from './selectors';
import styles from './styles';

import images from '../../../assets/images';

class SplashScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: () => null,
    drawerLockMode: 'locked-closed',
  }

  constructor() {
    super();

    this.state = {
      hasLoadedGif: false,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;

    NativeSplashScreen.hide();

    setTimeout(() => {
      this.setState({
        hasLoadedGif: true,
      });
    }, 2400);

    setTimeout(() => {
      this.setState({
        hasLoadedGif: true,
      }, () => {
        AsyncStorage.getItem('token')
          .then((token) => {
            if (token) {
              navigation.navigate('PostsList', { isInitial: true });
            } else {
              navigation.navigate('Authentication');
            }
          });
      });
    }, 3000);
  }

  render() {
    const { hasLoadedGif } = this.state;

    return (
      <ImageBackground
        source={images.bg}
        style={styles.background}
      >
        <View style={styles.center}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#4E65F6"
          />
          <View style={styles.loading}>
            <Image
              source={images.CCTitleSingle}
              style={{ height: 110, width: 220, marginRight: hasLoadedGif ? 20 : 0 }}
            />
          </View>
        </View>
      </ImageBackground>
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
