import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import React from 'react';
import { Formik } from 'formik';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { Thumbnail } from 'native-base';
import schema from './schema';
import selectors from './selectors';
import styles from './styles';

import { Input, SubmitButton, AnimatedWrapper } from '../common/components';

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
    };

    this.formRef = React.createRef();
    this.welcomeRef = React.createRef();
  }

  handleSubmit = (values) => {
    const { login } = this.props;

    login(values)
      .then(() => {
        this.setState({
          isFormVisible: false,
        }, () => {
          this.titleRef.fadeOutUp()
            .then(() => {
              this.setState({
                isWelcomeVisible: true,
              }, () => {
                this.titleRef.fadeInDown();
              });
            });
        });
      });
  }

  handleLogout = () => {
    const { clearAuthenticationState } = this.props;

    this.setState({
      isWelcomeVisible: false,
    }, () => {
      this.titleRef.fadeOutUp()
        .then(() => {
          clearAuthenticationState();
          this.setState({
            isFormVisible: true,
          }, () => {
            this.titleRef.fadeInDown();
          });
        });
    });
  }

  setTitleRef = (ref) => {
    if (ref) {
      this.titleRef = ref;
    }
  }

  render() {
    const { isSubmitting, hasFailedToSubmit, currentUser, navigation } = this.props;
    const { isWelcomeVisible, isFormVisible } = this.state;

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

    return (
      <ImageBackground
        source={images.bg}
        style={styles.background}
      >
        <View style={styles.container}>
          <Animatable.View
            animation="fadeInUp"
            ref={this.setTitleRef}
            style={styles.titleContainer}
          >
            <Image
              source={images.logo}
              style={styles.image}
            />
            <Text style={styles.title}>CityCoin</Text>
          </Animatable.View>
          <AnimatedWrapper
            style={styles.welcomeContainer}
            isVisible={isWelcomeVisible}
          >
            <View style={styles.welcomeContent}>
              {welcomeContent}
            </View>
          </AnimatedWrapper>
          <AnimatedWrapper
            isVisible={isFormVisible}
          >
            <Formik
              initialValues={schema.initialValues}
              validationSchema={schema.validations}
              onSubmit={this.handleSubmit}
              render={props => (
                <React.Fragment>
                  <Input
                    {...props}
                    disabled={isSubmitting}
                    name="email"
                    placeholder="Email"
                    hasFailedToSubmit={hasFailedToSubmit}
                  />
                  <Input
                    {...props}
                    name="password"
                    disabled={isSubmitting}
                    placeholder="Password"
                    secureTextEntry
                    hasFailedToSubmit={hasFailedToSubmit}
                  />

                  <View style={[styles.buttonsContent, styles.buttonMargin]}>
                    <View style={[styles.buttonContainer]}>
                      <SubmitButton
                        onPress={props.handleSubmit}
                        isSubmitting={isSubmitting}
                        label="Sign in"
                      />
                    </View>
                    <TouchableOpacity onPress={this.toggleForm}>
                      <Text style={styles.subtitle}>Need an account?</Text>
                    </TouchableOpacity>
                  </View>
                </React.Fragment>
              )}
            />
          </AnimatedWrapper>
        </View>
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
};

export default connect(
  selectors,
  {
    ...actions.authentication,
  },
)(Authentication);
