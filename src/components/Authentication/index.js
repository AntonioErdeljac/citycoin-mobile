import React from 'react';
import { Formik } from 'formik';
import { Input, Item, Label } from 'native-base';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';

import styles from './styles';
import schema from './schema';

import images from '../../../assets/images';

class Authentication extends React.Component {
  static navigationOptions = {
    header: () => null,
  }

  constructor() {
    super();

    this.state = {
      form: 'login',
    };
  }

  toggleForm = () => {
    const { form } = this.state;

    this.setState({
      form: form === 'register' ? 'login' : 'register',
    });
  }

  render() {
    const { form } = this.state;

    return (
      <ImageBackground
        source={images.bg}
        style={styles.background}
      >
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Image
              source={images.logo}
              style={styles.image}
            />
            <Text style={styles.title}>CityCoin</Text>
          </View>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={schema}
            onSubmit={() => {}}
            render={props => (
              <React.Fragment>
                <Item
                  style={styles.innerContainer}
                  floatingLabel
                >
                  <Label style={styles.inputLabel}>Email</Label>
                  <Input
                    onChangeText={text => props.setFieldValue('email', text)}
                    value={props.values.email}
                    style={styles.input}
                    autoCapitalize="none"
                    name="email"
                  />
                </Item>
                <Item style={styles.innerContainer} floatingLabel>
                  <Label style={styles.inputLabel}>Password</Label>
                  <Input
                    onChangeText={text => props.setFieldValue('password', text)}
                    value={props.values.password}
                    style={styles.input}
                    name="password"
                    secureTextEntry
                  />
                </Item>
                <View style={[styles.innerContainer, styles.buttonMargin]}>
                  <TouchableOpacity onPress={props.handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>{form === 'register' ? 'Sign Up' : 'Sign In'}</Text>
                  </TouchableOpacity>
                </View>
              </React.Fragment>
            )}
          />
          <TouchableOpacity onPress={this.toggleForm}>
            <Text style={styles.subtitle}>{form === 'register' ? 'Already have an account?' : "Don't have an account?"}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default Authentication;
