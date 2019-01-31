import NativeSplashScreen from 'react-native-splash-screen';
import PropTypes from 'prop-types';
import Geolocation from 'react-native-geolocation-service';
import React from 'react';
import { View, AsyncStorage, StatusBar, Image, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import actions from '../../actions';

import images from '../../../assets/images';

class SplashScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: () => null,
    drawerLockMode: 'locked-closed',
  }

  componentDidMount() {
    const { navigation, loginByToken, getCities } = this.props;

    NativeSplashScreen.hide();

    AsyncStorage.getItem('token')
      .then((token) => {
        if (token) {
          loginByToken(token)
            .then(() => {
              Geolocation.getCurrentPosition(
                (position) => {
                  getCities({ longitude: position.coords.longitude, latitude: position.coords.latitude })
                    .then(() => {
                      StatusBar.setBarStyle('dark-content');
                      navigation.navigate('Cities');
                    });
                },
                () => {},
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
              );
            })
            .catch(() => {
              AsyncStorage.clear()
                .then(() => {
                  navigation.navigate('Authentication');
                });
            });
        } else {
          navigation.navigate('Authentication');
        }
      });
  }

  render() {
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
              style={{ height: 110, width: 220 }}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

SplashScreen.propTypes = {
  getCities: PropTypes.func.isRequired,
  loginByToken: PropTypes.func.isRequired,
  navigation: PropTypes.shape({}).isRequired,
};

export default connect(
  null,
  {
    ...actions.authentication,
    ...actions.cities,
  },
)(SplashScreen);
