import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import React from 'react';
import { Formik } from 'formik';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { connect } from 'react-redux';

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
          this.titleRef.fadeOut()
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

  render() {
    const { isSubmitting, hasFailedToSubmit } = this.props;
    const { isWelcomeVisible, isFormVisible } = this.state;

    return (
      <ImageBackground
        source={images.bg}
        style={styles.background}
      >
        <View style={styles.container}>
          <Animatable.View
            animation="fadeInUp"
            ref={(ref) => {
              if (ref) {
                this.titleRef = ref;
              }
            }}
            style={styles.titleContainer}
          >
            <Image
              source={images.logo}
              style={styles.image}
            />
            <Text style={styles.title}>CityCoin</Text>
          </Animatable.View>
          <AnimatedWrapper
            style={{ width: '100%', alignSelf: 'center' }}
            isVisible={isWelcomeVisible}
          >
            <View style={[{ padding: 20, borderRadius: 5, backgroundColor: 'white', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }]}>
              <Image
                source={{ uri: 'http://wilkinsonschool.org/wp-content/uploads/2018/10/user-default-grey.png' }}
                style={{ height: 100, width: 100 }}
              />
              <Text style={{ fontFamily: 'Poppins-Medium', color: 'rgba(0,0,0,.6)', paddingTop: 15, fontSize: 20, marginBottom: 15 }}>Antonio Erdeljac</Text>
              <SubmitButton
                onPress={() => {}}
                label="Continue"
              />
              <TouchableOpacity onPress={this.toggleForm}>
                <Text style={styles.subtitle}>Logout</Text>
              </TouchableOpacity>
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

                  <View style={[{ padding: 20, borderRadius: 5, backgroundColor: 'white' }, styles.buttonMargin]}>
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
  hasFailedToSubmit: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(
  selectors,
  {
    ...actions.authentication,
  },
)(Authentication);
