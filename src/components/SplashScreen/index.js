import PropTypes from 'prop-types';
import React from 'react';
import NativeSplashScreen from 'react-native-splash-screen';
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
    const { navigation, loginByToken } = this.props;

    NativeSplashScreen.hide();

    AsyncStorage.getItem('token')
      .then((token) => {
        if (token) {
          loginByToken(token)
            .then(() => {
              navigation.navigate('TabRouter');
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
  navigation: PropTypes.shape({}).isRequired,
  loginByToken: PropTypes.func.isRequired,
};

export default connect(
  null,
  {
    ...actions.authentication,
  },
)(SplashScreen);
