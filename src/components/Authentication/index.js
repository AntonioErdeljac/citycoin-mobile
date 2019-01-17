import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Input, Item, Label } from 'native-base';

import styles from './styles';

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

    const formContent = form === 'login'
      ? (
        <React.Fragment>
          <Item style={styles.innerContainer} floatingLabel>
            <Label style={styles.inputLabel}>Email</Label>
            <Input style={styles.input} autoCapitalize="none" />
          </Item>
          <Item style={styles.innerContainer} floatingLabel>
            <Label style={styles.inputLabel}>Password</Label>
            <Input style={styles.input} secureTextEntry />
          </Item>
        </React.Fragment>
      )
      : (
        <React.Fragment>
          <Item style={styles.innerContainer} floatingLabel>
            <Label style={styles.inputLabel}>First name</Label>
            <Input style={styles.input} autoCapitalize="none" />
          </Item>
          <Item style={styles.innerContainer} floatingLabel>
            <Label style={styles.inputLabel}>Last name</Label>
            <Input style={styles.input} autoCapitalize="none" />
          </Item>
          <Item style={styles.innerContainer} floatingLabel>
            <Label style={styles.inputLabel}>Email</Label>
            <Input style={styles.input} autoCapitalize="none" />
          </Item>
          <Item style={styles.innerContainer} floatingLabel>
            <Label style={styles.inputLabel}>Password</Label>
            <Input style={styles.input} secureTextEntry />
          </Item>
        </React.Fragment>
      );

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
          {formContent}
          <View style={[styles.innerContainer, styles.buttonMargin]}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{form === 'register' ? 'Sign Up' : 'Sign In'}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={this.toggleForm}>
            <Text style={styles.subtitle}>{form === 'register' ? 'Already have an account?' : "Don't have an account?"}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default Authentication;
