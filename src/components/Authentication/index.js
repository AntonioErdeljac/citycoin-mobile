import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { Thumbnail } from 'native-base';

import selectors from './selectors';
import styles from './styles';
import { Login, Register } from './components';

import { SubmitButton } from '../common/components';

import actions from '../../actions';

import images from '../../../assets/images';

class Authentication extends React.Component {
  static navigationOptions = {
    header: () => null,
  }

  constructor() {
    super();

    this.state = {
      isWelcomeVisible: false,
      isFormVisible: true,
      activeForm: 'login',
    };

    this.mainRef = React.createRef();
  }

  handleSubmit = (values) => {
    const { login, register } = this.props;
    const { activeForm } = this.state;

    if (activeForm === 'login') {
      login(values)
        .then(() => {
          this.mainRef.fadeOutUp()
            .then(() => {
              this.setState({
                isFormVisible: false,
              }, () => {
                this.setState({
                  isWelcomeVisible: true,
                }, () => {
                  this.mainRef.fadeInDown();
                });
              });
            });
        });
    } else {
      register(values)
        .then(() => {
          this.mainRef.fadeOutUp()
            .then(() => {
              this.setState({
                isFormVisible: false,
                activeForm: 'login',
              }, () => {
                this.setState({
                  isFormVisible: true,
                }, () => {
                  this.mainRef.fadeInDown();
                });
              });
            });
        });
    }
  }

  handleLogout = () => {
    const { clearAuthenticationState } = this.props;

    this.mainRef.fadeOutUp()
      .then(() => {
        this.setState({
          isWelcomeVisible: false,
        }, () => {
          clearAuthenticationState();
          this.setState({
            isFormVisible: true,
          }, () => {
            this.mainRef.fadeInDown();
          });
        });
      });
  }

  setTitleRef = (ref) => {
    if (ref) {
      this.titleRef = ref;
    }
  }

  toggleForm = () => {
    const { clearAuthenticationState } = this.props;
    const { activeForm } = this.state;

    clearAuthenticationState();
    this.mainRef.fadeOutUp()
      .then(() => {
        this.setState({
          activeForm: activeForm === 'login' ? 'register' : 'login',
        }, () => {
          this.mainRef.fadeInDown();
        });
      });
  }

  render() {
    const { isSubmitting, hasFailedToSubmit, currentUser, navigation } = this.props;
    const { isWelcomeVisible, isFormVisible, activeForm } = this.state;

    const formContent = activeForm === 'login'
      ? (
        <Login
          hasFailedToSubmit={hasFailedToSubmit}
          isSubmitting={isSubmitting}
          toggleForm={this.toggleForm}
          handleOnSubmit={this.handleSubmit}
        />
      )
      : (
        <Register
          hasFailedToSubmit={hasFailedToSubmit}
          isSubmitting={isSubmitting}
          toggleForm={this.toggleForm}
          handleOnSubmit={this.handleSubmit}
        />
      );

    const welcomeContent = !isEmpty(currentUser)
      ? (
        <React.Fragment>
          <Thumbnail
            source={{ uri: 'https://avatars2.githubusercontent.com/u/23248726?s=460&v=4' }}
            large
            style={styles.welcomeContentImage}
          />
          <Text style={styles.welcomeContentText}>{currentUser.personal.firstName} {currentUser.personal.lastName}</Text>
          <SubmitButton
            onPress={() => navigation.navigate('Dashboard')}
            label="Continue"
          />
          <TouchableOpacity onPress={this.handleLogout}>
            <Text style={styles.subtitle}>Logout</Text>
          </TouchableOpacity>
        </React.Fragment>
      )
      : null;

    const welcomeContentToggle = isWelcomeVisible
      ? (
        <View style={styles.welcomeContent}>
          {welcomeContent}
        </View>
      )
      : null;

    const formContentToggle = isFormVisible
      ? (
        <View>
          {formContent}
        </View>
      )
      : null;

    return (
      <ImageBackground
        source={images.bg}
        style={styles.background}
      >
        <Animatable.View animation="fadeInUp" ref={(ref) => { this.mainRef = ref; }} style={styles.container}>
          <View
            ref={this.setTitleRef}
            style={styles.titleContainer}
          >
            <Image
              source={images.logo}
              style={styles.image}
            />
            <Text style={styles.title}>CityCoin</Text>
          </View>
          {welcomeContentToggle}
          {formContentToggle}
        </Animatable.View>
      </ImageBackground>
    );
  }
}

Authentication.propTypes = {
  clearAuthenticationState: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({}).isRequired,
  hasFailedToSubmit: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  navigation: PropTypes.shape({}).isRequired,
  register: PropTypes.func.isRequired,
};

export default connect(
  selectors,
  {
    ...actions.authentication,
  },
)(Authentication);
