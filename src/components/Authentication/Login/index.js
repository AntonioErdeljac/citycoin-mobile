import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';

import styles from './styles';

import images from '../../../../assets/images';

const Login = () => (
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
      <View style={styles.innerContainer}>
        <TextInput style={styles.input} placeholder="Email" autoCapitalize="none" placeholderTextColor="white" />
      </View>
      <View style={styles.innerContainer}>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="white" />
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ImageBackground>
);

export default Login;
