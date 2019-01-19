import React from 'react';
import { Formik } from 'formik';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';

import styles from './styles';
import schema from './schema';

import { Input } from '../common/components';

import images from '../../../assets/images';

class Authentication extends React.Component {
  static navigationOptions = {
    header: () => null,
  }

  render() {
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
                <Input
                  {...props}
                  name="email"
                  placeholder="Email"
                />
                <Input
                  {...props}
                  name="password"
                  placeholder="Password"
                  secureTextEntry
                />
                <View style={[{ padding: 10, borderRadius: 5, backgroundColor: 'white' }, styles.buttonMargin]}>
                  <View style={[styles.buttonContainer]}>
                    <TouchableOpacity onPress={props.handleSubmit} style={styles.button}>
                      <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress={this.toggleForm}>
                    <Text style={styles.subtitle}>Need an account?</Text>
                  </TouchableOpacity>
                </View>
              </React.Fragment>
            )}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Authentication;
