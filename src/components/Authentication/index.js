import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { Thumbnail } from 'native-base';

import selectors from './selectors';
import styles from './styles';
import { Login, Register } from './components';

import { SubmitButton } from '../common/components';

import actions from '../../actions';
import { paths } from '../../constants';

import images from '../../../assets/images';

class Authentication extends React.Component {
  static navigationOptions = {
    header: () => null,
    drawerLabel: () => null,
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

  componentWillMount() {
    this.purgeForm();
  }

  handleSubmit = (values) => {
    const { login, register } = this.props;
    const { activeForm } = this.state;

    if (activeForm === 'login') {
      login(values)
        .then(({ result }) => {
          AsyncStorage.setItem('token', result.data.authentication.sessionToken)
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
        });
    } else {
      register(values)
        .then(({ result }) => {
          AsyncStorage.setItem('token', result.data.authentication.sessionToken)
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

  handleNavigate = () => {
    const { navigation } = this.props;

    this.mainRef.fadeOutUp()
      .then(() => {
        navigation.navigate('Cities');
      });
  }

  purgeForm = () => {
    const { clearAuthenticationState } = this.props;

    clearAuthenticationState();

    this.setState({
      isWelcomeVisible: false,
      isFormVisible: true,
      activeForm: 'login',
    });
  }

  render() {
    const { isSubmitting, hasFailedToSubmit, currentUser } = this.props;
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
            source={{ uri: currentUser.personal.imageUrl || paths.STATIC_USER_PLACEHOLDER }}
            large
            style={styles.welcomeContentImage}
          />
          <Text style={styles.welcomeContentText}>{currentUser.personal.firstName} {currentUser.personal.lastName}</Text>
          <SubmitButton
            onPress={this.handleNavigate}
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
